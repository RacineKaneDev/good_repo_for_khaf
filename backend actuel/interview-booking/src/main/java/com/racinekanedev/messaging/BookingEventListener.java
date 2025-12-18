package com.racinekanedev.messaging;

import com.racinekanedev.domain.bookingStatus;
import com.racinekanedev.payload.dto.PaymentOrder;
import com.racinekanedev.service.BookingService;
import lombok.RequiredArgsConstructor;
import org.springframework.amqp.rabbit.annotation.RabbitListener;
import org.springframework.stereotype.Component;

@Component
@RequiredArgsConstructor
public class BookingEventListener {

    private final BookingService bookingService;

    @RabbitListener(queues = "booking-queue")
    public void receiveBookingUpdate(PaymentOrder paymentOrder) {
        try {
            System.out.println("Received Booking Update Event for Booking ID: " + paymentOrder.getBookingId());
            bookingService.updateBooking(paymentOrder.getBookingId(), bookingStatus.CONFIRMED); // Assuming CONFIRMED enum exists
        } catch (Exception e) {
            e.printStackTrace();
            System.err.println("Error creating/updating booking from listener: " + e.getMessage());
        }
    }
}
