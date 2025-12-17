package com.racinekanedev.controller;

import com.racinekanedev.modal.Category;
import com.racinekanedev.service.CategoryService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.web.servlet.MockMvc;

import java.util.Set;

import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

@SpringBootTest
@AutoConfigureMockMvc
class CategoryControllerIT {

    @Autowired
    private MockMvc mockMvc;

    @Mock
    private CategoryService categoryService;

    @BeforeEach
    void setup() {
        MockitoAnnotations.openMocks(this);
    }

    private Category createCategory(Long id, String name) {
        Category c = new Category();
        c.setId(id);
        c.setName(name);
        return c;
    }

    @Test
    void getAllCategories_shouldReturnOk() throws Exception {
        Set<Category> mockCategories = Set.of(
                createCategory(1L, "Tech"),
                createCategory(2L, "Sport")
        );

        when(categoryService.getAllCategoriesByCompany(1L)).thenReturn(mockCategories);

        mockMvc.perform(get("/api/categories/company/1"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$[0].name").value("Tech"))
                .andExpect(jsonPath("$[1].name").value("Sport"));
    }
}