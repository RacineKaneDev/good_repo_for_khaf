package com.racinekanedev.review.service.clients;

import com.racinekanedev.review.payload.dto.CompanyDTO;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

@FeignClient(name = "financing-company-service")
public interface CompanyFeignClient {
    @GetMapping("/api/companies/{id}")
    ResponseEntity<CompanyDTO> getCompanyById(@PathVariable("id") Long id);
}
