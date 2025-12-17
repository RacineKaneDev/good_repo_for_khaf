package com.racinekanedev.service;

import com.racinekanedev.exception.UserException;
import com.racinekanedev.modal.User;

import java.util.List;

public interface UserService {
    User createUser(User user);
    User getUserById(Long id) throws UserException;
    List<User> getAllUsers();
    void deleteUser(Long id) throws UserException;
    User updateUser(Long id,  User user) throws UserException;
    User getUserByJwt(String jwt) throws Exception;

}
