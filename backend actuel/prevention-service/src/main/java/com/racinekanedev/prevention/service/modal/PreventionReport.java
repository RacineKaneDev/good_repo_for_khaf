package com.racinekanedev.prevention.service.modal;

import lombok.Data;

@Data
public class PreventionReport {
    private Long totalPreventions;
    private Long stoppedPreventions;
    private Long failedPreventions;
    private Long ongoingPreventions;
    private Double successRate;
}
