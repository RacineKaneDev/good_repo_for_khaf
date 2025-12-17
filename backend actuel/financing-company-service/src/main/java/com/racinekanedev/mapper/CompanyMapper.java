package com.racinekanedev.mapper;

import com.racinekanedev.modal.Company;
import com.racinekanedev.payload.dto.CompanyDTO;

public class CompanyMapper {

    public static CompanyDTO mapToDTO(Company company) {
        CompanyDTO companyDTO = new CompanyDTO();

        companyDTO.setId(company.getId());
        companyDTO.setName(company.getName());
        companyDTO.setAddress(company.getAddress());
        companyDTO.setCity(company.getCity());
        companyDTO.setEmail(company.getEmail());
        companyDTO.setPhoneNumber(company.getPhoneNumber());
        companyDTO.setCloseTime(company.getCloseTime());
        companyDTO.setOpenTime(company.getOpenTime());
        companyDTO.setCompanyAdminId(company.getCompanyAdminId());
        companyDTO.setImages(company.getImages());

        return companyDTO;
    }
}
