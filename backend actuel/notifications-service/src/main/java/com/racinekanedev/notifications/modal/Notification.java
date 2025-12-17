package com.racinekanedev.notifications.modal;

import jakarta.persistence.*;
import lombok.Data;
import java.time.LocalDateTime;

@Entity
@Data
public class Notification {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    private String type;
    private Boolean isRead = false;
    private String description;
    
    private Long userId;
    private Long bookingId;
    private Long companyId;
    
    private LocalDateTime createdAt = LocalDateTime.now();
}
