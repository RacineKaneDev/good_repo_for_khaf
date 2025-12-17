package com.racinekanedev.controller;


import com.racinekanedev.payload.dto.LoginDTO;
import com.racinekanedev.payload.dto.SignupDTO;
import com.racinekanedev.payload.response.AuthResponse;
import com.racinekanedev.service.AuthService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
@RequestMapping("/auth")
public class AuthController {

    private final AuthService authService;


    @PostMapping("/signup")
    public ResponseEntity<AuthResponse> signup(
            @RequestBody SignupDTO req) throws Exception {


        AuthResponse response=authService.signup(req);

        return ResponseEntity.ok(response);
    }

    @PostMapping("/login")
    public ResponseEntity<AuthResponse> login(
            @RequestBody LoginDTO req) throws Exception {

        AuthResponse response=authService.login(req.getUsername(), req.getPassword());

        return ResponseEntity.ok(response);

    }


    @GetMapping("/access-token/refresh-token/{refreshToken}")
    public ResponseEntity<AuthResponse> getAccessToken(
            @PathVariable String refreshToken) throws Exception {

        AuthResponse response = authService.getAccessTokenFromRefreshToken(refreshToken);

        return ResponseEntity.ok(response);
    }
}
