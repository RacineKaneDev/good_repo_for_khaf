package com.racinekanedev.controller;


import com.racinekanedev.modal.Category;
import com.racinekanedev.service.CategoryService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Set;

@RestController
@RequestMapping("/api/categories")
@RequiredArgsConstructor
public class CategorieController {

    private final CategoryService categoryService;

    @GetMapping("/company/{id}")
    public ResponseEntity<Set<Category>> getCategoriesByCompany(@PathVariable Long id) throws Exception{

        Set<Category> categories = categoryService.getAllCategoriesByCompany(id);
        return ResponseEntity.ok(categories);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Category> getCategoryById(@PathVariable Long id) throws Exception{

        Category category = categoryService.getCategoryById(id);
        return ResponseEntity.ok(category);
    }
}
