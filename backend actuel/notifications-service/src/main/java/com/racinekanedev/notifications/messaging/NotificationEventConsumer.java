package com.racinekanedev.notifications.messaging;

import com.racinekanedev.notifications.email.EmailService;
import com.racinekanedev.notifications.modal.Notification;
import com.racinekanedev.notifications.service.NotificationService;
import lombok.RequiredArgsConstructor;
import org.springframework.amqp.rabbit.annotation.RabbitListener;
import org.springframework.stereotype.Component;

@Component
@RequiredArgsConstructor
public class NotificationEventConsumer {
    private final NotificationService notificationService;
    private final EmailService emailService;

    @RabbitListener(queues = "notification-queue")
    public void consumeNotification(Notification notification) {
        // Save notification
        notificationService.createNotification(notification);
        
        // Send email
        try {
            // In a real app we'd fetch user email. For this task we send to the configured sender or a fixed test email
            // Prompt said "email configuration with racinekanedev@gmail.com". I'll send IT to there or generic.
            // Let's send to the same email for demo purposes as we don't have real users emails in dummy data easily.
            emailService.sendEmail("racinekanedev@gmail.com", "New Notification: " + notification.getType(), 
                "Description: " + notification.getDescription());
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
