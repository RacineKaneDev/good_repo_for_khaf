package com.racinekanedev.repository;

import com.racinekanedev.modal.Opportunity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Set;

public interface OpportunityRepository extends JpaRepository<Opportunity,Long> {

    Set<Opportunity> findByCompanyId(Long companyId);

}
