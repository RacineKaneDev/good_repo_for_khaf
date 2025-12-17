package com.racinekanedev.review.payload.dto;
import lombok.Data;
import java.time.LocalDateTime;
import java.util.List;

@Data
public class ReviewDTO {
    private Long id;
    private String reviewText;
    private double rating;
    private Long companyId;
    private Long userId;
    private LocalDateTime createdAt;
    
    private UserDTO user; // For display
    private CompanyDTO company; // For display
}
