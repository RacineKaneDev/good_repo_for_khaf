package com.racinekanedev.prevention.service.payload.dto;

import com.racinekanedev.prevention.service.domain.PreventionStatus;
import lombok.Data;

import java.time.LocalDate;

@Data
public class PreventionDTO {

    private Long id;

    private Long userId; // Keycloak user id (sub)

    private String fullName;

    private String email;

    private String address;

    private Integer age;

    private String zonePrevention; // zone ou potentiel départ (ex: "Mbour").

    private LocalDate datePrevention = LocalDate.now();

    private String typePrevention; // campagne, visite, sensibilisation

    private PreventionStatus status =  PreventionStatus.PENDING;

    private String observation;
}
