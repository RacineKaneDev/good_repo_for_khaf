package com.racinekanedev.prevention.service.payload.dto;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;
import lombok.Data;

import java.time.LocalDate;

@Data
public class CreatePreventionRequest {

    @NotBlank
    private String userId;


    @NotBlank
    private String fullName;


    @NotBlank
    @Email
    private String email;


    private String address;


    @Min(0)
    private Integer age;


    @NotBlank
    private String zonePrevention;


    private LocalDate datePrevention;


    private String typePrevention;


    private String observation;

}
