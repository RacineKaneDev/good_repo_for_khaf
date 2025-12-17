package com.racinekanedev.payload.dto;

import lombok.Data;

import java.time.LocalDateTime;
import java.util.Set;

@Data
public class bookingRequest {

    private LocalDateTime startTime;
    private LocalDateTime endTime;
    private Set<Long> opportunityIds;
}
