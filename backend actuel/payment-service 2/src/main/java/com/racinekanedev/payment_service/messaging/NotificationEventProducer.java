package com.racinekanedev.payment_service.messaging;

import com.racinekanedev.payload.dto.NotificationDTO;
import lombok.RequiredArgsConstructor;
import org.springframework.amqp.rabbit.core.RabbitTemplate;
import org.springframework.stereotype.Component;

@Component
@RequiredArgsConstructor
public class NotificationEventProducer {
    private final RabbitTemplate rabbitTemplate;

    public void sentNotificationEvent(Long bookingId,
                                      Long userId,
                                      Long companyId) {
        NotificationDTO notification=new NotificationDTO();
        notification.setBookingId(bookingId);
        notification.setCompanyId(companyId);
        notification.setUserId(userId);
        notification.setMessage("Votre réservation a été confirmée avec succès.");
        notification.setTitle("Réservation Confirmée");
        notification.setType("BOOKING");

        rabbitTemplate.convertAndSend("notification-queue", notification);
    }
}
