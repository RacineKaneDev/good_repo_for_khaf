package com.racinekanedev.payload.dto;

import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.AllArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class PaymentOrder {
    private Long id;
    private Long amount;
    private String status;
    private String paymentMethod;
    private String paymentLinkId;
    private Long userId;
    private Long companyId;
    private Long bookingId;
}
