package com.racinekanedev.controller;

import com.racinekanedev.dto.CompanyDTO;
import com.racinekanedev.modal.Category;
import com.racinekanedev.service.CategoryService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Set;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/categories/company-admin")
public class CompanyCategoryController {

    private final CategoryService categoryService;

    @PostMapping
    public ResponseEntity<Category> createCategory(@RequestBody  Category category) throws Exception{

        CompanyDTO companyDTO = new CompanyDTO();
        companyDTO.setId(1L);

        Category savedCategory = categoryService.saveCategory(category, companyDTO);
        return ResponseEntity.ok(savedCategory);

    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteCategory(@PathVariable  Long id) throws Exception{

        CompanyDTO companyDTO = new CompanyDTO();
        companyDTO.setId(1L);

        categoryService.deleteCategoryById(id,companyDTO.getId());
        return ResponseEntity.ok("Category Deleted successfully");

    }
}
