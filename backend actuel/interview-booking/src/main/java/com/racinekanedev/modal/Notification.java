package com.racinekanedev.modal;

import lombok.Data;
import java.time.LocalDateTime;

@Data
public class Notification {
    private Long id;
    private String type;
    private Boolean isRead = false;
    private String description;
    private Long userId;
    private Long bookingId;
    private Long companyId;
    private LocalDateTime createdAt = LocalDateTime.now();
}
