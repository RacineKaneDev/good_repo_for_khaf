package com.racinekanedev.service.impl;


import com.racinekanedev.domain.bookingStatus;
import com.racinekanedev.dto.CompanyDTO;
import com.racinekanedev.dto.OpportunityDTO;
import com.racinekanedev.dto.UserDTO;
import com.racinekanedev.dto.bookingRequest;
import com.racinekanedev.modal.Booking;
import com.racinekanedev.modal.CompanyReport;
import com.racinekanedev.repository.BookingRepository;
import com.racinekanedev.service.BookingService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class BookingServiceImpl implements BookingService {

    private final BookingRepository bookingRepository;

    @Override
    public Booking createBooking(bookingRequest booking, UserDTO user, CompanyDTO company, Set<OpportunityDTO> opportunityDTOSet) throws Exception {

        int totalDuration = opportunityDTOSet.stream().mapToInt(OpportunityDTO::getInterviewDuration)
                            .sum();

        LocalDateTime bookingStartTime = booking.getStartTime();
        LocalDateTime bookingEndTime = bookingStartTime.plusMinutes(totalDuration);



        Boolean isSlotAvailable = isTimeSlotIsAvailable(company,bookingStartTime,bookingEndTime);

        int totalPrice = opportunityDTOSet.stream().mapToInt(OpportunityDTO::getPrice).sum();

        Set<Long> idList = opportunityDTOSet.stream().map(OpportunityDTO::getId).collect(Collectors.toSet());

        Booking newBooking = new Booking();
        newBooking.setStartTime(bookingStartTime);
        newBooking.setEndTime(bookingEndTime);
        newBooking.setCompanyId(company.getId());
        newBooking.setCustomerId(user.getId());
        newBooking.setStatus(bookingStatus.PENDING);
        newBooking.setOpportunityIds(idList);
        newBooking.setTotalPrice(totalPrice);



        return bookingRepository.save(newBooking);
    }



    public boolean isTimeSlotIsAvailable(CompanyDTO companyDTO, LocalDateTime bookingStartTime, LocalDateTime bookingEndTime) throws Exception {

        List<Booking> existingBookings = getBookingsByCompany(companyDTO.getId());


        LocalDateTime companyOpenTime = companyDTO.getOpenTime().atDate(bookingStartTime.toLocalDate());
        LocalDateTime companyCloseTime = companyDTO.getCloseTime().atDate(bookingStartTime.toLocalDate());


        if (bookingStartTime.isBefore(companyOpenTime) || bookingEndTime.isAfter(companyCloseTime)) {
            throw new Exception("Reservez une heure d'entretien durant laquelle cette compagnie sera fonctionnelle! ");
        }


        for (Booking existingBooking : existingBookings) {

            LocalDateTime existingBookingStartTime = existingBooking.getStartTime();
            LocalDateTime existingBookingEndTime = existingBooking.getEndTime();

            if (bookingStartTime.isBefore(existingBookingEndTime) && bookingEndTime.isAfter(existingBookingStartTime)) {
                throw new Exception("ce creneau a deja ete reserve pour un entretien, choisissez un autre creneau!");
            }

            if (bookingStartTime.isEqual(existingBookingStartTime) || bookingEndTime.isEqual(existingBookingEndTime)) {
                throw new Exception("ce creneau a deja ete reserve pour un entretien, choisissez un autre creneau!");
            }
        }



        return true;
    }

    @Override
    public List<Booking> getBookingsByCustomer(Long customerId) {
        return bookingRepository.findByCustomerId(customerId);
    }

    @Override
    public List<Booking> getBookingsByCompany(Long companyId) {
        return bookingRepository.findByCompanyId(companyId);
    }

    @Override
    public Booking getBookingById(Long id) throws Exception {
        Booking booking = bookingRepository.findById(id).orElse(null);
        if (booking == null) {
            throw new Exception("Booking not found");
        }
        return booking;
    }

    @Override
    public Booking updateBooking(Long bookingId, bookingStatus status) throws Exception {
        Booking booking = getBookingById(bookingId);

        booking.setStatus(status);

        return bookingRepository.save(booking);
    }

    @Override
    public List<Booking> getBookingsByDate(LocalDate date, Long companyId) {

        List<Booking> allBookings = getBookingsByCompany(companyId);

        if (date == null) {
            return allBookings;
        }


        return allBookings.stream().filter(booking -> isSameDate(booking.getStartTime(), date) ||
                                    isSameDate(booking.getEndTime(), date))
                            .collect(Collectors.toList());

    }

    private boolean isSameDate(LocalDateTime dateTime, LocalDate date) {
        return dateTime.toLocalDate().isEqual(date);
    }

    @Override
    public CompanyReport getCompanyReport(Long companyId) {

        List<Booking> bookings = getBookingsByCompany(companyId);

        Double totalEarnings = bookings.stream().mapToDouble(Booking::getTotalPrice).sum();

        Integer totalBookings = bookings.size();

        List <Booking> cancelledBookings = bookings.stream().filter(booking -> booking.getStatus().equals(bookingStatus.CANCELLED)).collect(Collectors.toList());

        Double totalRefund = cancelledBookings.stream().mapToDouble(Booking::getTotalPrice).sum();

        CompanyReport companyReport = new CompanyReport();
        companyReport.setTotalEarnings(totalEarnings);
        companyReport.setTotalBookings(totalBookings);
        companyReport.setTotalRefund(totalRefund);
        companyReport.setCompanyId(companyId);
        companyReport.setCancelledBookings(cancelledBookings.size());
        return companyReport;
    }
}
