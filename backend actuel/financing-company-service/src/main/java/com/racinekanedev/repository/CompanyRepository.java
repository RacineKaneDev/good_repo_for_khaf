package com.racinekanedev.repository;

import com.racinekanedev.modal.Company;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface CompanyRepository extends JpaRepository<Company, Long> {
        
        Company findByCompanyAdminId(Long companyAdminId);



        @Query(
                "select c from Company c where" +
                        "(lower(c.city) like lower(concat('%', :keyword, '%') ) OR " +
                        "lower(c.name) like lower(concat('%', :keyword, '%') ) OR " +
                        "lower(c.address) like lower(concat('%', :keyword, '%') ) )"
        )

        List<Company> searchCompanies(@Param("keyword") String keyword);
    
}
