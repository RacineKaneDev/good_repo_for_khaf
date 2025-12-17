package com.racinekanedev.service;


import com.racinekanedev.domain.PaymentMethod;
import com.racinekanedev.modal.PaymentOrder;
import com.racinekanedev.payload.dto.BookingDTO;
import com.racinekanedev.payload.dto.UserDTO;
import com.racinekanedev.payload.response.PaymentLinkResponse;
import com.razorpay.PaymentLink;
import com.razorpay.RazorpayException;
import com.stripe.exception.StripeException;

public interface PaymentService {

    PaymentLinkResponse createOrder(UserDTO user, BookingDTO booking, PaymentMethod paymentMethod) throws RazorpayException, StripeException;

    PaymentOrder getPaymentOrderById(Long id) throws Exception;

    PaymentOrder getPaymentOrderByPaymentId(String paymentId);

    PaymentLink createRazorpayPaymentLink(UserDTO user,Long amount,Long orderId) throws RazorpayException;

    String createStripePaymentLink(UserDTO user,Long amount,Long orderId) throws StripeException;

    Boolean proceedPayment(PaymentOrder paymentOrder, String paymentId, String paymentLinkId) throws RazorpayException;
}
