package com.racinekanedev.service.impl;

import com.racinekanedev.dto.CategoryDTO;
import com.racinekanedev.dto.CompanyDTO;
import com.racinekanedev.dto.OpportunityDTO;
import com.racinekanedev.modal.Opportunity;
import com.racinekanedev.repository.OpportunityRepository;
import com.racinekanedev.service.OpportunityService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.HashSet;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class OpportunityServiceImpl implements OpportunityService {

    private final OpportunityRepository opportunityRepository;

    @Override
    public Opportunity createOpportunity(CompanyDTO companyDTO, OpportunityDTO opportunityDTO, CategoryDTO categoryDTO) {

        Opportunity opportunity = new Opportunity();
        opportunity.setCompanyId(companyDTO.getId());
        opportunity.setCategoryId(categoryDTO.getId());
        opportunity.setName(opportunityDTO.getName());
        opportunity.setDescription(opportunityDTO.getDescription());
        opportunity.setImage(opportunityDTO.getImage());
        opportunity.setPrice(opportunityDTO.getPrice());
        opportunity.setInterviewDuration(opportunityDTO.getInterviewDuration());
        return opportunityRepository.save(opportunity);
    }

    @Override
    public Opportunity updateOpportunity(Long opportunityId, Opportunity opportunity) throws Exception {

        Opportunity existingOpportunity = opportunityRepository.findById(opportunityId).orElse(null);
        if(existingOpportunity==null){
            throw new Exception("this opportunity does not exist with id "+opportunityId);
        }

        existingOpportunity.setName(opportunity.getName());
        existingOpportunity.setDescription(opportunity.getDescription());
        existingOpportunity.setImage(opportunity.getImage());
        existingOpportunity.setPrice(opportunity.getPrice());
        existingOpportunity.setInterviewDuration(opportunity.getInterviewDuration());

        return opportunityRepository.save(existingOpportunity);
    }

    @Override
    public Set<Opportunity> getAllOpportunitiesByCompanyId(Long companyId, Long categoryId) {
        Set<Opportunity> opportunities = opportunityRepository.findByCompanyId(companyId);
        if(categoryId!=null){
            opportunities=opportunities.stream().filter((opportunity)->opportunity.getCategoryId() !=null && opportunity.getCompanyId()==categoryId).collect(Collectors.toSet());
        }
        return opportunities;
    }

    @Override
    public Set<Opportunity> getOpportunitiesByIds(Set<Long> ids) {
        List<Opportunity> opportunities =  opportunityRepository.findAllById(ids);
        return  new HashSet<>(opportunities);
    }

    @Override
    public Opportunity getOpportunityById(Long id) throws Exception {
        Opportunity existingOpportunity = opportunityRepository.findById(id).orElse(null);
        if(existingOpportunity==null){
            throw new Exception("this opportunity does not exist with id "+id);
        }
        return existingOpportunity;
    }
}
