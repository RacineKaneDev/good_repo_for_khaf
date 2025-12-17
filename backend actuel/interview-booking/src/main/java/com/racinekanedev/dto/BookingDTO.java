package com.racinekanedev.dto;

import com.racinekanedev.domain.bookingStatus;
import jakarta.persistence.ElementCollection;
import lombok.Data;

import java.time.LocalDateTime;
import java.util.Set;

@Data
public class BookingDTO {

    private Long id;

    private Long companyId;

    private Long customerId;

    private LocalDateTime startTime;

    private LocalDateTime endTime;
    
    private Set<Long> opportunityIds;

    private bookingStatus status =  bookingStatus.PENDING;

    private int totalPrice;

}
