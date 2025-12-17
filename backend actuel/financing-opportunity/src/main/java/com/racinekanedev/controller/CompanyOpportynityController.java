package com.racinekanedev.controller;


import com.racinekanedev.dto.CategoryDTO;
import com.racinekanedev.dto.CompanyDTO;
import com.racinekanedev.dto.OpportunityDTO;
import com.racinekanedev.modal.Opportunity;
import com.racinekanedev.service.OpportunityService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Set;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/opportunity/companyAdmin")
public class CompanyOpportynityController {

    private final OpportunityService opportunityService;

    @PostMapping
    public ResponseEntity<Opportunity> createOpportunity(@RequestBody OpportunityDTO opportunityDTO) throws Exception{

        CompanyDTO companyDTO = new CompanyDTO();
        companyDTO.setId(1L);

        CategoryDTO categoryDTO = new CategoryDTO();
        categoryDTO.setId(opportunityDTO.getCategory());

        Opportunity savedOpportunity = opportunityService.createOpportunity(companyDTO,opportunityDTO,categoryDTO);
        return ResponseEntity.ok(savedOpportunity);
    }


    @PostMapping("/{id}")
    public ResponseEntity<Opportunity> updateOpportunity(@PathVariable Long id, @RequestBody Opportunity opportunity) throws Exception{



        Opportunity updatedOpportunity = opportunityService.updateOpportunity(id, opportunity);
        return ResponseEntity.ok(updatedOpportunity);
    }
}
