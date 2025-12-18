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
    private final com.racinekanedev.notifications.email.EmailService emailService;

    @GetMapping("/user")
    public ResponseEntity<List<Notification>> getUserNotifications() {
        return ResponseEntity.ok(notificationService.getNotificationsByUserId(1L));
    }

    @PostMapping("/send-report")
    public ResponseEntity<String> sendReport(@RequestBody String email) {
        try {
            emailService.sendEmail(email, "Rapport de Prévention", "<h1>Rapport de Prévention</h1><p>Ceci est un rapport de prévention généré automatiquement.</p>");
            return ResponseEntity.ok("Rapport envoyé avec succès");
        } catch (Exception e) {
            return ResponseEntity.badRequest().body("Erreur lors de l'envoi du rapport: " + e.getMessage());
        }
    }
}
