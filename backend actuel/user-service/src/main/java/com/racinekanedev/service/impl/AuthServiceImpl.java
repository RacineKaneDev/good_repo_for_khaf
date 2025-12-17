package com.racinekanedev.service.impl;

import com.racinekanedev.modal.User;
import com.racinekanedev.payload.dto.SignupDTO;
import com.racinekanedev.payload.response.AuthResponse;
import com.racinekanedev.payload.response.TokenResponse;
import com.racinekanedev.repository.UserRepository;
import com.racinekanedev.service.AuthService;
import com.racinekanedev.service.KeycloackUserService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;

@Service
@RequiredArgsConstructor
public class AuthServiceImpl implements AuthService {


    private final UserRepository userRepository;
    private final KeycloackUserService keycloakUserService;
    @Override
    public AuthResponse login(String username, String password) throws Exception {
        {
            TokenResponse tokenResponse=keycloakUserService.getAdminAccessToken(
                    username,
                    password,
                    "password",
                    null
            );
            AuthResponse response = new AuthResponse();
            response.setTitle("Welcome Back " + username);
            response.setMessage("login success");
            response.setJwt(tokenResponse.getAccessToken());
            response.setRefresh_token(tokenResponse.getRefreshToken());
            return response;
        }
    }

    @Override
    public AuthResponse signup(SignupDTO req) throws Exception {

        keycloakUserService.createUser(req);

        User createdUser = new User();
        createdUser.setEmail(req.getEmail());
        createdUser.setCreatedAt(LocalDateTime.now());
        createdUser.setRole(req.getRole());
        createdUser.setFullName(req.getFirstName() + " " + req.getLastName());
        createdUser.setPassword(req.getPassword());
        createdUser.setUsername(req.getUsername());

        userRepository.save(createdUser);


        TokenResponse tokenResponse= keycloakUserService.getAdminAccessToken(
                req.getUsername(),
                req.getPassword(),
                "password",
                null
        );

        AuthResponse response = new AuthResponse();
        response.setTitle("Welcome " + createdUser.getEmail());
        response.setMessage("Register success");
        response.setJwt(tokenResponse.getAccessToken());
        response.setRefresh_token(tokenResponse.getRefreshToken());
        response.setRole(createdUser.getRole());
        return response;
    }

    @Override
    public AuthResponse getAccessTokenFromRefreshToken(String refreshToken) throws Exception {
        TokenResponse tokenResponse= keycloakUserService.getAdminAccessToken(
                null,
                null,
                "refresh_token",
                refreshToken
        );
        AuthResponse response = new AuthResponse();

        response.setMessage("Access token received");
        response.setJwt(tokenResponse.getAccessToken());
        response.setRefresh_token(tokenResponse.getRefreshToken());
        return response;
    }
}
