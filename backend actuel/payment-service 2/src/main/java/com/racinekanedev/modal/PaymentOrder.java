package com.racinekanedev.modal;

import com.racinekanedev.domain.PaymentMethod;
import com.racinekanedev.domain.PaymentOrderStatus;
import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
public class PaymentOrder {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @Column(nullable = false)
    private Long amount;

    @Column(nullable = false)
    private PaymentOrderStatus status=PaymentOrderStatus.PENDING;

    @Column(nullable=false)
    private PaymentMethod paymentMethod;

    private String paymentLinkId;

    @Column(nullable=false)
    private Long userId;

    @Column(nullable=false)
    private Long companyId;

    @Column(nullable=false)
    private Long bookingId;
}
