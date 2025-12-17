package com.racinekanedev.review.payload.request;
import lombok.Data;
@Data
public class CreateReviewRequest {
    private String reviewText;
    private double rating;
    private Long companyId;
}
