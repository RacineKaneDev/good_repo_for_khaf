package com.racinekanedev.notifications.service;

import com.racinekanedev.notifications.modal.Notification;
import com.racinekanedev.notifications.repository.NotificationRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
@RequiredArgsConstructor
public class NotificationService {
    private final NotificationRepository notificationRepository;
    private final org.springframework.messaging.simp.SimpMessagingTemplate messagingTemplate;

    public Notification createNotification(Notification notification) {
        Notification savedNotification = notificationRepository.save(notification);
        messagingTemplate.convertAndSendToUser(
                savedNotification.getUser().getId().toString(),
                "/notification/private",
                savedNotification
        );
        return savedNotification;
    }
    
    public List<Notification> getNotificationsByUserId(Long userId) {
        return notificationRepository.findByUserId(userId);
    }
}
