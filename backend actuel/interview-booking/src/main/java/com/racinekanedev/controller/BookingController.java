package com.racinekanedev.controller;

import com.racinekanedev.domain.bookingStatus;
import com.racinekanedev.dto.*;
import com.racinekanedev.mapper.BookingMapper;
import com.racinekanedev.modal.Booking;
import com.racinekanedev.modal.CompanyReport;
import com.racinekanedev.service.BookingService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.time.LocalTime;
import java.util.HashSet;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

@RestController
@RequiredArgsConstructor
@RequestMapping("api/interview-booking")
public class BookingController {

    private final BookingService bookingService;


    @PostMapping
    public ResponseEntity<Booking> createBooking(@RequestParam Long companyId,
                                                 @RequestBody bookingRequest bookingRequest) throws Exception {

        UserDTO user = new UserDTO();
        user.setId(1L);

        CompanyDTO company = new CompanyDTO();
        company.setId(companyId);
        company.setOpenTime(LocalTime.of(8, 0));  // 08:00
        company.setCloseTime(LocalTime.of(20, 0)); // 20:00

        Set<OpportunityDTO> opportunityDTOSet = new HashSet<>();

        OpportunityDTO opportunityDTO = new OpportunityDTO();
        opportunityDTO.setId(1L);
        opportunityDTO.setPrice(500);
        opportunityDTO.setName("hair cut");
        opportunityDTO.setInterviewDuration(45);

        opportunityDTOSet.add(opportunityDTO);


        Booking booking = bookingService.createBooking(bookingRequest,
                user,
                company,
                opportunityDTOSet);

        return ResponseEntity.ok(booking);
    }



    @GetMapping("/customer")
    public ResponseEntity<Set<BookingDTO>> getBookingsByCustomer(){

        List<Booking> bookings = bookingService.getBookingsByCustomer(1L);
        return ResponseEntity.ok(getBookingDTOs(bookings));

    }



    @GetMapping("/company")
    public ResponseEntity<Set<BookingDTO>> getBookingsByCompany(){

        List<Booking> bookings = bookingService.getBookingsByCompany(1L);
        return ResponseEntity.ok(getBookingDTOs(bookings));

    }


    private Set<BookingDTO> getBookingDTOs(List<Booking> bookings){
        return bookings.stream().map(booking -> {
            return BookingMapper.toDTO(booking);
        }).collect(Collectors.toSet());
    }


    @GetMapping("/{bookingId}")
    public ResponseEntity<BookingDTO> getBookingsById(@PathVariable Long bookingId) throws Exception {

        Booking booking = bookingService.getBookingById(bookingId);
        return ResponseEntity.ok(BookingMapper.toDTO(booking));

    }

    @PutMapping("/{bookingId}/status")
    public ResponseEntity<BookingDTO> updateBookingStatus(@PathVariable Long bookingId, bookingStatus status) throws Exception {

        Booking booking = bookingService.updateBooking(bookingId,status);
        return ResponseEntity.ok(BookingMapper.toDTO(booking));

    }


    @GetMapping("/slots/company/{companyId}/date/{dateId}")
    public ResponseEntity<List<BookingSlotDTO>> getBookedSlot(@PathVariable Long companyId,
                                                              @RequestParam(required = false) LocalDate date)
                                                                throws Exception {

        List<Booking> bookings = bookingService.getBookingsByDate(date, companyId);

        List<BookingSlotDTO> slotDTOS = bookings.stream().map(booking -> {
            BookingSlotDTO slotDTO = new BookingSlotDTO();
            slotDTO.setStartTime(booking.getStartTime());
            slotDTO.setStartTime(booking.getEndTime());
            return slotDTO;
        }).collect(Collectors.toList());


        return ResponseEntity.ok(slotDTOS);

    }

    @GetMapping("/report")
    public ResponseEntity<CompanyReport> getCompanyReport() throws Exception {

        CompanyReport report = bookingService.getCompanyReport(1L);
        return ResponseEntity.ok(report);

    }
}
