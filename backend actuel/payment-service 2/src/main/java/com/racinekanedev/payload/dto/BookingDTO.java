package com.racinekanedev.payload.dto;


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

    private int totalPrice;

}
