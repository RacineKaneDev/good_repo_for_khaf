package com.racinekanedev.service;

import com.racinekanedev.modal.Category;
import com.racinekanedev.repository.CategoryRepository;
import com.racinekanedev.service.impl.CategoryServiceImpl;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.HashSet;
import java.util.List;
import java.util.Set;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertTrue;
import static org.mockito.Mockito.*;

class CategoryServiceTest {

    @Mock
    private CategoryRepository categoryRepository;

    @InjectMocks
    private CategoryServiceImpl categoryService;

    @BeforeEach
    void setUp() {
        MockitoAnnotations.openMocks(this);
    }

    private Category createCategory(Long id, String name) {
        Category c = new Category();
        c.setId(id);
        c.setName(name);
        return c;
    }

    @Test
    void testGetAllCategoriesByCompany() {
        // ✅ Arrange
        Long companyId = 1L;
        Set<Category> mockCategories = new HashSet<>();
        mockCategories.add(createCategory(1L, "Tech"));
        mockCategories.add(createCategory(2L, "Sport"));

        when(categoryRepository.findByCompanyId(companyId)).thenReturn(mockCategories);

        // ✅ Act
        Set<Category> result = categoryService.getAllCategoriesByCompany(companyId);

        // ✅ Assert
        assertEquals(2, result.size());
        assertTrue(result.stream().anyMatch(c -> c.getName().equals("Tech")));
        assertTrue(result.stream().anyMatch(c -> c.getName().equals("Sport")));

        // ✅ Vérifier que findByCompanyId a été appelé exactement une fois
        verify(categoryRepository, times(1)).findByCompanyId(companyId);
    }
}