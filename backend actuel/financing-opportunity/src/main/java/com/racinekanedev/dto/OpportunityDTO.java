package com.racinekanedev.dto;

import jakarta.persistence.Column;
import lombok.Data;

@Data
public class OpportunityDTO {


    private Long id;

    private String name;

    private String description;

    private int price;

    private int interviewDuration;

    private Long companyId;

    private Long category;

    private String image;
}
