package com.racinekanedev.controller;


import com.racinekanedev.domain.PaymentMethod;
import com.racinekanedev.modal.PaymentOrder;
import com.racinekanedev.payload.dto.BookingDTO;
import com.racinekanedev.payload.dto.UserDTO;
import com.racinekanedev.payload.response.PaymentLinkResponse;
import com.racinekanedev.service.PaymentService;
import com.razorpay.RazorpayException;
import com.stripe.exception.StripeException;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
@RequestMapping("api/payments/")
public class PaymentController {

    private final PaymentService paymentService;

    @PostMapping("/create")
    public ResponseEntity<PaymentLinkResponse> createPaymentLink(@RequestBody BookingDTO booking,
                                                                 @RequestParam PaymentMethod paymentMethod) throws StripeException, RazorpayException {
        UserDTO user = new UserDTO();
        user.setFullName("Racine kane");
        user.setEmail("racinekanedev@gmail.com");
        user.setId(1L);

        PaymentLinkResponse res = paymentService.createOrder(user,booking,paymentMethod);

        return ResponseEntity.ok(res);

    }


    @GetMapping("/{paymentOrderId}")
    public ResponseEntity<PaymentOrder> getPaymentOrderById(@PathVariable Long paymentOrderId) throws Exception {

        PaymentOrder res = paymentService.getPaymentOrderById(paymentOrderId);

        return ResponseEntity.ok(res);

    }

    @PatchMapping("/proceed")
    public ResponseEntity<Boolean> proceedPayment(@RequestParam String paymentId,
                                                  @RequestParam String paymentLinkId) throws Exception {


        PaymentOrder paymentOrder = paymentService.getPaymentOrderByPaymentId(paymentLinkId);
        Boolean res = paymentService.proceedPayment(paymentOrder,paymentId,paymentLinkId);

        return ResponseEntity.ok(res);

    }

}
