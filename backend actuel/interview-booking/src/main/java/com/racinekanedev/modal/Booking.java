package com.racinekanedev.modal;


import com.racinekanedev.domain.bookingStatus;
import jakarta.persistence.*;
import lombok.Data;

import java.time.LocalDateTime;
import java.util.Set;

@Entity
@Data
public class Booking {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    private Long companyId;

    private Long customerId;

    private LocalDateTime startTime;

    private LocalDateTime endTime;


    @ElementCollection
    private Set<Long> opportunityIds;

    private bookingStatus status =  bookingStatus.PENDING;

    private int totalPrice;


}
