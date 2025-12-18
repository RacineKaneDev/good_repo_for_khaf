package com.racinekanedev.payload.dto;

import lombok.Data;

@Data
public class NotificationDTO {
    private Long id;
    private String title;
    private String message;
    private Long userId;
    private Long bookingId;
    private Long companyId;
    private String type;
}
