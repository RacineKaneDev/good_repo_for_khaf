package com.racinekanedev.service;


import com.racinekanedev.dto.CategoryDTO;
import com.racinekanedev.dto.CompanyDTO;
import com.racinekanedev.dto.OpportunityDTO;
import com.racinekanedev.modal.Opportunity;
import org.springframework.stereotype.Service;

import java.util.Set;

@Service
public interface OpportunityService {

    Opportunity createOpportunity(CompanyDTO companyDTO, OpportunityDTO opportunityDTO, CategoryDTO categoryDTO);

    Opportunity updateOpportunity(Long opportunityId ,Opportunity opportunity) throws Exception;

    Set<Opportunity> getAllOpportunitiesByCompanyId(Long companyId, Long categoryId);

    Set<Opportunity> getOpportunitiesByIds(Set<Long> ids);

    Opportunity getOpportunityById(Long id) throws Exception;

}
