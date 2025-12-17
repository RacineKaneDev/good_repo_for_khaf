package com.racinekanedev.review.service.impl;

import com.racinekanedev.review.modal.Review;
import com.racinekanedev.review.payload.dto.ReviewDTO;
import com.racinekanedev.review.payload.dto.UserDTO;
import com.racinekanedev.review.payload.request.CreateReviewRequest;
import com.racinekanedev.review.repository.ReviewRepository;
import com.racinekanedev.review.service.clients.UserFeignClient;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class ReviewServiceImpl {
    private final ReviewRepository reviewRepository;
    private final UserFeignClient userFeignClient;

    public Review createReview(CreateReviewRequest req, Long userId) {
        Review review = new Review();
        review.setReviewText(req.getReviewText());
        review.setRating(req.getRating());
        review.setCompanyId(req.getCompanyId());
        review.setUserId(userId);
        review.setCreatedAt(LocalDateTime.now());
        return reviewRepository.save(review);
    }

    public List<ReviewDTO> getReviewsByCompany(Long companyId) {
        return reviewRepository.findByCompanyId(companyId).stream().map(review -> {
            ReviewDTO dto = new ReviewDTO();
            dto.setId(review.getId());
            dto.setRating(review.getRating());
            dto.setReviewText(review.getReviewText());
            dto.setCompanyId(review.getCompanyId());
            dto.setUserId(review.getUserId());
            dto.setCreatedAt(review.getCreatedAt());
            try {
                UserDTO user = userFeignClient.getUserById(review.getUserId()).getBody();
                dto.setUser(user);
            } catch (Exception e) {}
            return dto;
        }).collect(Collectors.toList());
    }
}
