package com.racinekanedev.service;

import com.racinekanedev.modal.Company;
import com.racinekanedev.payload.dto.CompanyDTO;
import com.racinekanedev.payload.dto.UserDTO;

import java.util.List;

public interface CompanyService {
    Company createCompany(CompanyDTO company, UserDTO user);

    Company updateCompany(CompanyDTO company, UserDTO user, Long companyId ) throws Exception;

    List<Company> getAllCompanies();

    Company getCompanyById(Long companyId) throws Exception;

    Company getCompanyByCompanyAdminId(Long companyAdminId );

    List<Company> searchCompanyByCity(String city);

}
