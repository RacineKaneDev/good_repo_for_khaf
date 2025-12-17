package com.racinekanedev.prevention.service.repository;

import com.racinekanedev.prevention.service.domain.PreventionStatus;
import com.racinekanedev.prevention.service.modal.Prevention;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface PreventionRepository extends JpaRepository<Prevention, Long> {

    List<Prevention> findByUserId(Long userId);
    List<Prevention> findByZonePrevention(String zonePrevention);
    List<Prevention> findByStatus(PreventionStatus status);

}
