package com.racinekanedev.modal;

import lombok.Data;

@Data
public class CompanyReport {
    private Long companyId;
    private String companyName;
    private Double totalEarnings;
    private Integer totalBookings;
    private Integer cancelledBookings;
    private Double totalRefund;
}
