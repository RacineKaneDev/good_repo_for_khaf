package com.racinekanedev.service;

import com.racinekanedev.dto.CompanyDTO;
import com.racinekanedev.modal.Category;

import java.util.Set;

public interface CategoryService {

    Category saveCategory(Category category,CompanyDTO companyDTO);
    Set<Category> getAllCategoriesByCompany(Long id);
    Category getCategoryById(Long id) throws Exception;
    void deleteCategoryById(Long id, Long companyId) throws Exception;

}
