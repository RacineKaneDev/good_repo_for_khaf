package com.racinekanedev.modal;

import com.racinekanedev.domain.UserRole;
import jakarta.persistence.*;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import lombok.*;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import java.time.LocalDateTime;

@Entity
@Data
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;


    private String fullName;

    @NotBlank(message = "Le champs email est obligatoire")
    @Email(message = "le champs email doit etre valide")
    private String email;

    private String phone;

    @NotBlank(message = "le champ username est obligatoire")
    private String username;


    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private UserRole role = UserRole.CUSTOMER;

    @CreationTimestamp
    private LocalDateTime createdAt;

    @UpdateTimestamp
    private LocalDateTime updatedAt;

    @NotBlank(message = "Le champs password est obligatoire")
    private String password;


}
