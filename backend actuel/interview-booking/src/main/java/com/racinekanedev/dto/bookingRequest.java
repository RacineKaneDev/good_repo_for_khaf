package com.racinekanedev.dto;

import lombok.Data;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.Set;

@Data
public class bookingRequest {

    private LocalDateTime startTime;
    private LocalDateTime endTime;
    private Set<Long> opportunityIds;
}
