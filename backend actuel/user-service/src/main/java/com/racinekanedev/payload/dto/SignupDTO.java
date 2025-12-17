package com.racinekanedev.payload.dto;

import com.racinekanedev.domain.UserRole;
import lombok.Data;

@Data
public class SignupDTO {
	private String email;
	private String password;
	private String phone;
	private String firstName;
	private String lastName;
	private String username;
	private UserRole role;
	private String address;


}