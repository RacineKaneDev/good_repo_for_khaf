package com.racinekanedev.notifications.controller;

import com.racinekanedev.notifications.modal.Notification;
import com.racinekanedev.notifications.service.NotificationService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/notifications")
@RequiredArgsConstructor
public class NotificationController {
    private final NotificationService notificationService;

    @GetMapping("/user")
    public ResponseEntity<List<Notification>> getUserNotifications() { // Simplified, normally gets Principal
        // For task demo, assuming user 1 or passed via param. 
        // Or actually, frontend might call this. Let's return hardcoded user 1 notifications for demonstration if no auth context.
        return ResponseEntity.ok(notificationService.getNotificationsByUserId(1L));
    }
}
