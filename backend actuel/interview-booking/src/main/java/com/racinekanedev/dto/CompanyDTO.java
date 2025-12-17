package com.racinekanedev.dto;

import lombok.Data;

import java.time.LocalTime;
import java.util.List;

@Data
public class CompanyDTO {

    private Long id;

    private String name;

    private List<String> images;

    private String address;

    private String phoneNumber;

    private String email;

    private String city;

    private Long companyAdminId;

    private LocalTime openTime;

    private LocalTime closeTime;

}
