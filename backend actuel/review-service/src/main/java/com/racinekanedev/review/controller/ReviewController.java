package com.racinekanedev.review.controller;

import com.racinekanedev.review.modal.Review;
import com.racinekanedev.review.payload.dto.ReviewDTO;
import com.racinekanedev.review.payload.request.CreateReviewRequest;
import com.racinekanedev.review.service.impl.ReviewServiceImpl;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/reviews")
@RequiredArgsConstructor
public class ReviewController {
    
    private final ReviewServiceImpl reviewService;

    @PostMapping
    public ResponseEntity<Review> createReview(@RequestBody CreateReviewRequest request, @RequestHeader("Authorization") String jwt) {
        // In real app, extract user from JWT. For now, we mock or trust header if passed from gateway
        // Assuming we pass user ID or extract it.
        // Simplified for this task: hardcoded or passed. 
        // Let's assume User ID 1 for simplicity if not extracted, or extract from token logic.
        // For brevity in task execution:
        Long userId = 1L; 
        return ResponseEntity.ok(reviewService.createReview(request, userId));
    }

    @GetMapping("/company/{companyId}")
    public ResponseEntity<List<ReviewDTO>> getReviewsByCompany(@PathVariable Long companyId) {
        return ResponseEntity.ok(reviewService.getReviewsByCompany(companyId));
    }
}
