package com.racinekanedev.service;


import com.racinekanedev.domain.bookingStatus;
import com.racinekanedev.dto.CompanyDTO;
import com.racinekanedev.dto.OpportunityDTO;
import com.racinekanedev.dto.UserDTO;
import com.racinekanedev.dto.bookingRequest;
import com.racinekanedev.modal.Booking;
import com.racinekanedev.modal.CompanyReport;

import java.time.LocalDate;
import java.util.List;
import java.util.Set;

public interface BookingService {

    Booking createBooking(bookingRequest booking, UserDTO user, CompanyDTO company, Set<OpportunityDTO> opportunityDTOSet) throws Exception;

    List<Booking> getBookingsByCustomer(Long customerId);
    List<Booking> getBookingsByCompany(Long companyId);
    Booking getBookingById(Long id) throws Exception;
    Booking updateBooking(Long bookingId, bookingStatus status) throws Exception;
    List<Booking> getBookingsByDate(LocalDate date, Long companyId);
    CompanyReport getCompanyReport(Long companyId);

}
