package com.racinekanedev.controller;


import com.racinekanedev.modal.Opportunity;
import com.racinekanedev.service.OpportunityService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Set;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/financing-opportunity")
public class OpportunityController {

    private final OpportunityService opportunityService;

    @GetMapping("/company/{companyId}")
    public ResponseEntity<Set<Opportunity>> getOpportunitiesByCompanyId(@PathVariable Long companyId, @RequestParam(required = false) Long categoryId) throws Exception{
        Set<Opportunity> opportunities = opportunityService.getAllOpportunitiesByCompanyId(companyId, categoryId);
        return ResponseEntity.ok(opportunities);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Opportunity> getOpportunityById(@PathVariable Long id) throws Exception{
        Opportunity opportunity = opportunityService.getOpportunityById(id);
        return ResponseEntity.ok(opportunity);
    }

    @GetMapping("/List/{ids}")
    public ResponseEntity<Set<Opportunity>> getOpportunitiesByIds(@PathVariable Set<Long> ids) throws Exception{
        Set<Opportunity> opportunities = opportunityService.getOpportunitiesByIds(ids);
        return ResponseEntity.ok(opportunities);
    }


    @PostMapping
    public ResponseEntity<Opportunity> createOpportunity(@RequestBody OpportunityDTO opportunityDTO,
                                                         @RequestParam Long companyId,
                                                         @RequestParam Long categoryId) throws Exception {
        CompanyDTO companyDTO = new CompanyDTO();
        companyDTO.setId(companyId);

        CategoryDTO categoryDTO = new CategoryDTO();
        categoryDTO.setId(categoryId);

        Opportunity createdOpportunity = opportunityService.createOpportunity(companyDTO, opportunityDTO, categoryDTO);
        return ResponseEntity.ok(createdOpportunity);
    }
}
