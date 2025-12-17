package com.racinekanedev.repository;

import com.racinekanedev.dto.UserDTO;
import com.racinekanedev.modal.Booking;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface BookingRepository extends JpaRepository<Booking, Long> {

    List<Booking> findByCustomerId(Long customerId);
    List<Booking> findByCompanyId(Long companyId);
}
