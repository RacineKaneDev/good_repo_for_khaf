package com.racinekanedev.service.impl;

import com.racinekanedev.dto.CompanyDTO;
import com.racinekanedev.modal.Category;
import com.racinekanedev.repository.CategoryRepository;
import com.racinekanedev.service.CategoryService;
import org.springframework.stereotype.Service;

import java.util.Set;


@Service
public class CategoryServiceImpl implements CategoryService {


    private final CategoryRepository categoryRepository;

    public CategoryServiceImpl(CategoryRepository categoryRepository) {
        this.categoryRepository = categoryRepository;
    }

    @Override
    public Category saveCategory(Category category, CompanyDTO companyDTO) {

        Category newcategory = new Category();

        newcategory.setName(category.getName());
        newcategory.setCompanyId(companyDTO.getId());
        newcategory.setImage(category.getImage());

        return categoryRepository.save(newcategory);
    }

    @Override
    public Set<Category> getAllCategoriesByCompany(Long id) {
        return categoryRepository.findByCompanyId(id);
    }

    @Override
    public Category getCategoryById(Long id) throws Exception {
        Category category = categoryRepository.findById(id).orElse(null);
        if (category == null) {
            throw new Exception("categorie non existant avec l'id " + id);
        }
        return category;
    }

    @Override
    public void deleteCategoryById(Long id, Long companyId) throws Exception {

        Category category = getCategoryById(id);
        if(!category.getCompanyId().equals(companyId)){
            throw new Exception("vous n'avez pas le droit de supprimer cette categorie");
        }
        categoryRepository.deleteById(id);
    }
}
