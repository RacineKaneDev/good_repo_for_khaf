package com.racinekanedev.controller;


import com.racinekanedev.mapper.CompanyMapper;
import com.racinekanedev.modal.Company;
import com.racinekanedev.payload.dto.CompanyDTO;
import com.racinekanedev.payload.dto.UserDTO;
import com.racinekanedev.service.CompanyService;
import com.racinekanedev.service.client.UserFeignClient;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/companies")
@RequiredArgsConstructor
public class CompanyController {

    private final CompanyService companyService;
    private final UserFeignClient userFeignClient;


    @PostMapping
    public ResponseEntity<CompanyDTO> createCompany(@RequestBody CompanyDTO companyDTO,
                                                    @RequestHeader("Authorization") String jwt) throws Exception {

        UserDTO userDTO = userFeignClient.getUserProfile(jwt).getBody();

        Company company = companyService.createCompany(companyDTO, userDTO);
        CompanyDTO companyDTO1 = CompanyMapper.mapToDTO(company);

        return ResponseEntity.ok(companyDTO1) ;
    }

    @PatchMapping("/{id}")
    public ResponseEntity<CompanyDTO> updateCompany(@PathVariable("id") Long companyId,
                                                    @RequestBody CompanyDTO companyDTO,
                                                    @RequestHeader("Authorization") String jwt) throws Exception {

        UserDTO userDTO = userFeignClient.getUserProfile(jwt).getBody();


        Company company = companyService.updateCompany(companyDTO,userDTO,companyId);
        CompanyDTO companyDTO1 = CompanyMapper.mapToDTO(company);

        return ResponseEntity.ok(companyDTO1) ;
    }

    @GetMapping()
    public ResponseEntity<List<CompanyDTO>> getCompanies() throws Exception {

         List<Company> companies = companyService.getAllCompanies();

         List<CompanyDTO> companyDTOS = companies.stream().map((company)->
         {
             CompanyDTO companyDTO = CompanyMapper.mapToDTO(company);
             return companyDTO;
         }).toList();

         return ResponseEntity.ok(companyDTOS);
    }

    @GetMapping("/{companyId}")
    public ResponseEntity<CompanyDTO> getCompanyById(@PathVariable Long companyId ) throws Exception {


        Company company = companyService.getCompanyById(companyId);

        CompanyDTO companyDTO = CompanyMapper.mapToDTO(company);

        return ResponseEntity.ok(companyDTO);
    }

    @GetMapping("/search")
    public ResponseEntity<List<CompanyDTO>> searchCompanies(@RequestParam("city") String city) throws Exception {


        List<Company> companies = companyService.searchCompanyByCity(city);

        List<CompanyDTO> companyDTOS = companies.stream().map((company)->
        {
            CompanyDTO companyDTO = CompanyMapper.mapToDTO(company);
            return companyDTO;
        }).toList();

        return ResponseEntity.ok(companyDTOS);
    }

    @GetMapping("/companyAdmin")
    public ResponseEntity<CompanyDTO> getCompanyByCompanyAdminId(@PathVariable Long companyId ,
                                                                 @RequestHeader("Authorization") String jwt) throws Exception {

        UserDTO userDTO = userFeignClient.getUserProfile(jwt).getBody();


        if(userDTO==null){
            throw new Exception("user not found from jwt");
        }
        Company company = companyService.getCompanyByCompanyAdminId(userDTO.getId());

        CompanyDTO companyDTO = CompanyMapper.mapToDTO(company);

        return ResponseEntity.ok(companyDTO);
    }


}
