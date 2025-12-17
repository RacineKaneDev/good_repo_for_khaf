package com.racinekanedev.modal;


import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
public class Opportunity {


    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @Column(nullable = false)
    private String name;

    @Column(nullable = false)
    private String description;

    @Column(nullable = false)
    private int price;

    @Column(nullable = false)
    private int interviewDuration;

    @Column(nullable = false)
    private Long companyId;

    @Column(nullable = false)
    private Long categoryId;

    private String image;


}
