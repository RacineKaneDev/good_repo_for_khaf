package com.zosh.repository;

import com.zosh.modal.Salon;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface SalonRepository extends JpaRepository<Salon,Long> {
    Salon findByOwnerId(Long ownerId);
    @Query("SELECT s FROM Salon s WHERE " +
            "(LOWER(s.city) LIKE LOWER(CONCAT('%', :keyword, '%')) OR " +
            "LOWER(s.name) LIKE LOWER(CONCAT('%', :keyword, '%')) OR " +
            "LOWER(s.address) LIKE LOWER(CONCAT('%', :keyword, '%'))) AND " +
            "s.active = true")
    List<Salon> searchSalons(@Param("keyword") String keyword);
}
