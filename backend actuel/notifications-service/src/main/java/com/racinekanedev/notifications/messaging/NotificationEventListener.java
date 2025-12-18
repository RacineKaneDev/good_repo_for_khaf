package com.racinekanedev.notifications.messaging;

import com.racinekanedev.notifications.modal.Notification;
import com.racinekanedev.notifications.modal.User;
import com.racinekanedev.notifications.service.NotificationService;
import com.racinekanedev.payload.dto.NotificationDTO;
import lombok.RequiredArgsConstructor;
import org.springframework.amqp.rabbit.annotation.RabbitListener;
import org.springframework.stereotype.Component;
import java.time.LocalDateTime;

@Component
@RequiredArgsConstructor
public class NotificationEventListener {

    private final NotificationService notificationService;

    @RabbitListener(queues = "notification-queue")
    public void receiveNotificationEvent(NotificationDTO notificationDTO) {
        try {
            System.out.println("Received Notification Event: " + notificationDTO);

            Notification notification = new Notification();
            // Mapping fields based on actual Entity structure
            notification.setDescription(notificationDTO.getMessage() != null ? notificationDTO.getMessage() : notificationDTO.getTitle());
            notification.setType(notificationDTO.getType());
            notification.setUserId(notificationDTO.getUserId());
            notification.setBookingId(notificationDTO.getBookingId());
            notification.setCompanyId(notificationDTO.getCompanyId());
            notification.setIsRead(false);
            
            notificationService.createNotification(notification);
        } catch (Exception e) {
            e.printStackTrace();
            System.err.println("Error processing notification event: " + e.getMessage());
        }
    }
}
