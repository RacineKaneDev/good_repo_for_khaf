package com.racinekanedev.service.impl;

import com.racinekanedev.exception.UserException;
import com.racinekanedev.modal.User;
import com.racinekanedev.payload.dto.KeycloakUserDTO;
import com.racinekanedev.repository.UserRepository;
import com.racinekanedev.service.KeycloackUserService;
import com.racinekanedev.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;


@Service
@RequiredArgsConstructor
public class UserServiceImpl implements UserService {

    private final UserRepository userRepository;
    private final KeycloackUserService keycloackUserService;

    @Override
    public User createUser(User user) {
        return userRepository.save(user);
    }

    @Override
    public User getUserById(Long id) throws UserException {
        Optional<User> opt = userRepository.findById(id);
        if(opt.isPresent()){
            return opt.get();
        }
        throw new UserException("User not found");
    }

    @Override
    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    @Override
    public void deleteUser(Long id) throws UserException {
        Optional<User> opt = userRepository.findById(id);
        if(opt.isEmpty()){
            throw new UserException("User not exist with id " + id);
        }
        userRepository.deleteById(opt.get().getId());
    }

    @Override
    public User updateUser(Long id, User user) throws UserException {
        Optional<User> opt = userRepository.findById(id);
        if(opt.isEmpty()){
            throw new UserException("User not found with id " + id);
        }
        User existingUser = opt.get();
        existingUser.setFullName(user.getFullName());
        existingUser.setEmail(user.getEmail());
        existingUser.setPhone(user.getPhone());
        existingUser.setRole(user.getRole());
        existingUser.setPassword(user.getPassword());
        existingUser.setUsername(user.getUsername());
        return userRepository.save(existingUser);
    }

    @Override
    public User getUserByJwt(String jwt) throws Exception {
        KeycloakUserDTO keycloakUserDTO = keycloackUserService.fetchUserProfileByJwt(jwt);
        return userRepository.findByEmail(keycloakUserDTO.getEmail());
    }
}
