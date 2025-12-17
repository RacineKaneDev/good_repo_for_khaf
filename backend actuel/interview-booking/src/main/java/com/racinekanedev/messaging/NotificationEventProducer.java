package com.racinekanedev.messaging;

import com.racinekanedev.modal.Notification;
import lombok.RequiredArgsConstructor;
import org.springframework.amqp.rabbit.core.RabbitTemplate;
import org.springframework.stereotype.Component;

@Component
@RequiredArgsConstructor
public class NotificationEventProducer {
    private final RabbitTemplate rabbitTemplate;
    public void sendNotification(Notification notification) {
        rabbitTemplate.convertAndSend("notification-queue", notification);
    }
}
