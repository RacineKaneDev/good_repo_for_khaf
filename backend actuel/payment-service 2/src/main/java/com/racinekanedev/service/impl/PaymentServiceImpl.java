package com.racinekanedev.service.impl;


import com.racinekanedev.domain.PaymentMethod;
import com.racinekanedev.domain.PaymentOrderStatus;
import com.racinekanedev.modal.PaymentOrder;
import com.racinekanedev.payload.dto.BookingDTO;
import com.racinekanedev.payload.dto.UserDTO;
import com.racinekanedev.payload.response.PaymentLinkResponse;
import com.racinekanedev.repository.PaymentRepository;
import com.racinekanedev.service.PaymentService;
import com.razorpay.Payment;
import com.razorpay.PaymentLink;
import com.razorpay.RazorpayClient;
import com.razorpay.RazorpayException;
import com.stripe.Stripe;
import com.stripe.exception.StripeException;
import com.stripe.model.checkout.Session;
import com.stripe.param.checkout.SessionCreateParams;
import lombok.RequiredArgsConstructor;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class PaymentServiceImpl implements PaymentService {

    private final PaymentRepository paymentRepository;

    @Value("${stripe.api.key}")
    private String stripeSecretKey;

    @Value("${razorpay.api.key}")
    private String razorpayApiKey;


    @Value("${razorpay.api.secret}")
    private String razorpayApiSecret;



    @Override
    public PaymentLinkResponse createOrder(UserDTO user, BookingDTO booking, PaymentMethod paymentMethod) throws RazorpayException, StripeException {

        Long amount =(long) booking.getTotalPrice();

        PaymentOrder order = new PaymentOrder();
        order.setAmount(amount);
        order.setPaymentMethod(paymentMethod);
        order.setBookingId(booking.getId());
        order.setCompanyId(booking.getCompanyId());

        PaymentOrder savedOrder = paymentRepository.save(order);

        PaymentLinkResponse paymentLinkResponse = new PaymentLinkResponse();


        if (paymentMethod.equals(PaymentMethod.RAZORPAY)){
            PaymentLink payment = createRazorpayPaymentLink(user, savedOrder.getAmount(),
                                                            savedOrder.getId());

            String paymentUrl = payment.get("short_url");
            String paymentUrlId = payment.get("id");

            paymentLinkResponse.setPayment_link_url(paymentUrl);
            paymentLinkResponse.setGetPayment_link_id(paymentUrlId);


            savedOrder.setPaymentLinkId(paymentUrlId);


            paymentRepository.save(savedOrder);

        }else {
            String paymentUrl = createStripePaymentLink(user, savedOrder.getAmount(), savedOrder.getId());
            paymentLinkResponse.setPayment_link_url(paymentUrl);
        }

        return paymentLinkResponse;
    }

    @Override
    public PaymentOrder getPaymentOrderById(Long id) throws Exception {

        PaymentOrder paymentOrder = paymentRepository.findById(id).orElse(null);
        if (paymentOrder == null) {
            throw new Exception("Payment Order not found!");
        }
        return paymentOrder;
    }

    @Override
    public PaymentOrder getPaymentOrderByPaymentId(String paymentId) {

        return paymentRepository.findByPaymentLinkId(paymentId);
    }

    @Override
    public PaymentLink createRazorpayPaymentLink(UserDTO user, Long Amount, Long orderId) throws RazorpayException {

        Long amount = Amount*100;

        RazorpayClient razorpayClient = new RazorpayClient(razorpayApiKey,razorpayApiSecret);

        JSONObject paymentRequest = new JSONObject();
        paymentRequest.put("amount",amount);
        paymentRequest.put("currency","INR");

        JSONObject customer =  new JSONObject();
        customer.put("name",user.getFullName());
        customer.put("email",user.getEmail());

        paymentRequest.put("customer",customer);

        JSONObject notify = new JSONObject();
        notify.put("email",true);

        paymentRequest.put("notify",notify);
        paymentRequest.put("reminder_enable",true);

        //replace that local.... by my deploy url
        paymentRequest.put("callback_url","http://localhost:3000/payment-success/"+orderId);

        paymentRequest.put("callback_method","get");


        return razorpayClient.paymentLink.create(paymentRequest);
    }

    @Override
    public String createStripePaymentLink(UserDTO user, Long amount, Long orderId) throws StripeException {

        Stripe.apiKey = stripeSecretKey;

        SessionCreateParams params = SessionCreateParams.builder()
                .addPaymentMethodType(SessionCreateParams.PaymentMethodType.CARD)
                .setMode(SessionCreateParams.Mode.PAYMENT)
                .setSuccessUrl("http://localhost:3000/payment-success/"+orderId)
                .setCancelUrl("http://localhost:3000/payment/cancel")
                .addLineItem(SessionCreateParams.LineItem.builder()
                        .setQuantity(1L)
                        .setPriceData(SessionCreateParams.LineItem.PriceData.builder()
                                .setCurrency("usd")
                                .setUnitAmount(amount*100)
                                .setProductData(SessionCreateParams
                                        .LineItem
                                        .PriceData
                                        .ProductData
                                        .builder().setName("Reservation d'entretien pour votre financement").build()
                                ).build()
                        ).build()
                ).build();


        Session session = Session.create(params);

        return session.getUrl();
    }

    @Override
    public Boolean proceedPayment(PaymentOrder paymentOrder,
                                  String paymentId,
                                  String paymentLinkId) throws RazorpayException {


        if (paymentOrder.getStatus().equals(PaymentOrderStatus.PENDING)){
            if (paymentOrder.getPaymentMethod().equals(PaymentMethod.RAZORPAY)){

                RazorpayClient razorpay = new RazorpayClient(razorpayApiKey,razorpayApiSecret);

                Payment payment = razorpay.payments.fetch(paymentId);
                Integer amount = payment.get("amount");
                String status = payment.get("status");

                if (status.equals("captured")){
                    // creer un evenement kafka ou RabbitMq
                    paymentOrder.setStatus(PaymentOrderStatus.SUCCESS);
                    paymentRepository.save(paymentOrder);
                    return true;
                }

                return false;
            }
            else {
                paymentOrder.setStatus(PaymentOrderStatus.SUCCESS);
                paymentRepository.save(paymentOrder);
                return true;
            }

        }
        return false;
    }
}
