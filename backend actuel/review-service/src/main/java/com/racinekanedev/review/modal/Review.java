package com.racinekanedev.review.modal;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Review {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String reviewText;
    private double rating;

    @Column(nullable = false)
    private Long companyId; // Replaces salonId

    @Column(nullable = false)
    private Long userId; // Replaces customerId

    private LocalDateTime createdAt;
}
