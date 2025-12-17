package com.racinekanedev.prevention.service.modal;


import com.racinekanedev.prevention.service.domain.PreventionStatus;
import jakarta.persistence.*;
import lombok.Data;

import java.time.LocalDate;

@Entity
@Data
public class Prevention {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @Column(nullable = false, unique = true)
    private Long userId; // Keycloak user id (sub)

    @Column(nullable = false)
    private String fullName;

    @Column(nullable = false)
    private String email;

    @Column(nullable = false)
    private String address;

    private Integer age;


    @Column(nullable = false)
    private String zonePrevention; // zone ou potentiel départ (ex: "Mbour").

    @Column(nullable = false)
    private LocalDate datePrevention = LocalDate.now();

    private String typePrevention; // campagne, visite, sensibilisation



    private PreventionStatus status =  PreventionStatus.PENDING;


    @Column(length = 1000, nullable = false)
    private String observation;
}
