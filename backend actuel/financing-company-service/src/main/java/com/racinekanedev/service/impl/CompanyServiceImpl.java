package com.racinekanedev.service.impl;

import com.racinekanedev.modal.Company;
import com.racinekanedev.payload.dto.CompanyDTO;
import com.racinekanedev.payload.dto.UserDTO;
import com.racinekanedev.repository.CompanyRepository;
import com.racinekanedev.service.CompanyService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class CompanyServiceImpl implements CompanyService {

    private final CompanyRepository companyRepository;

    @Override
    public Company createCompany(CompanyDTO req, UserDTO user) {

        Company company = new Company();

        company.setName(req.getName());
        company.setAddress(req.getAddress());
        company.setEmail(req.getEmail());
        company.setPhoneNumber(req.getPhoneNumber());
        company.setCity(req.getCity());
        company.setCompanyAdminId(user.getId());
        company.setOpenTime(req.getOpenTime());
        company.setCloseTime(req.getCloseTime());
        company.setImages(req.getImages());

        return companyRepository.save(company) ;
    }

    @Override
    public Company updateCompany(CompanyDTO company, UserDTO user, Long companyId) throws Exception {

        Company existingCompany = companyRepository.findById(companyId).orElse(null);

        if(!company.getCompanyAdminId().equals(user.getId())){
            throw new Exception("you don't have permission to update this company");
        }

        if (existingCompany != null && company.getCompanyAdminId().equals(user.getId())) {
            existingCompany.setName(company.getName());
            existingCompany.setAddress(company.getAddress());
            existingCompany.setEmail(company.getEmail());
            existingCompany.setPhoneNumber(company.getPhoneNumber());
            existingCompany.setCity(company.getCity());
            existingCompany.setCompanyAdminId(user.getId());
            existingCompany.setOpenTime(company.getOpenTime());
            existingCompany.setCloseTime(company.getCloseTime());
            existingCompany.setImages(company.getImages());
            return companyRepository.save(existingCompany) ;

        }
        throw new Exception("Compagnie de financement inexistant ");
    }

    @Override
    public List<Company> getAllCompanies() {
        return companyRepository.findAll();
    }

    @Override
    public Company getCompanyById(Long companyId) throws Exception {
        Company company = companyRepository.findById(companyId).orElse(null);
        if (company == null) {
            throw new Exception("compagnie de financement inexistante");
        }
        return company;
    }

    @Override
    public Company getCompanyByCompanyAdminId(Long companyAdminId) {
        return companyRepository.findByCompanyAdminId(companyAdminId);
    }

    @Override
    public List<Company> searchCompanyByCity(String city) {
        return companyRepository.searchCompanies(city);
    }
}
