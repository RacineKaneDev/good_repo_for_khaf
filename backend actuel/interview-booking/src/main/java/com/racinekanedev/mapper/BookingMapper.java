package com.racinekanedev.mapper;

import com.racinekanedev.dto.BookingDTO;
import com.racinekanedev.modal.Booking;

public class BookingMapper {

    public static BookingDTO toDTO(Booking booking){
        BookingDTO bookingDTO = new BookingDTO();
        bookingDTO.setId(booking.getId());
        bookingDTO.setCustomerId(booking.getCustomerId());
        bookingDTO.setStatus(booking.getStatus());
        bookingDTO.setCompanyId(booking.getCompanyId());
        bookingDTO.setOpportunityIds(booking.getOpportunityIds());
        bookingDTO.setStartTime(booking.getStartTime());
        bookingDTO.setEndTime(booking.getEndTime());


        return bookingDTO;

    }
}
