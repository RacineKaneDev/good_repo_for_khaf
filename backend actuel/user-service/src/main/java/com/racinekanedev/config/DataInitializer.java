package com.racinekanedev.config;

import com.racinekanedev.domain.UserRole;
import com.racinekanedev.modal.User;
import com.racinekanedev.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.crypto.password.PasswordEncoder;

@Configuration
@RequiredArgsConstructor
public class DataInitializer implements CommandLineRunner {
    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;

    @Override
    public void run(String... args) {
        if (userRepository.findByEmail("nn_admin@ndankndank.com") == null) {
            User admin = new User();
            admin.setFullName("NN Admin");
            admin.setEmail("nn_admin@ndankndank.com");
            admin.setPassword(passwordEncoder.encode("admin"));
            admin.setRole(UserRole.ADMIN); // Mapped to NN_ADMIN in frontend logic
            userRepository.save(admin);
        }
    }
}
