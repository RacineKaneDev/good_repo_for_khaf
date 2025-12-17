package com.racinekanedev.service;

import com.racinekanedev.payload.dto.SignupDTO;
import com.racinekanedev.payload.response.AuthResponse;

public interface AuthService {
    AuthResponse login(String username, String password) throws Exception;
    AuthResponse signup(SignupDTO req) throws Exception;
    AuthResponse getAccessTokenFromRefreshToken(String refreshToken) throws Exception;
}
