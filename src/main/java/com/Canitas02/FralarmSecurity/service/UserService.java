package com.Canitas02.FralarmSecurity.service;

import com.Canitas02.FralarmSecurity.model.User;
import com.Canitas02.FralarmSecurity.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import jakarta.persistence.EntityNotFoundException;
import java.util.List;
import java.util.Optional;

/**
 * Service class for managing users in the FrAlarm Security Management System.
 * Handles operations related to the creation, retrieval, update, and deletion
 * of user records, including password management and role assignment.
 */
@Service
public class UserService {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;

    @Autowired
    public UserService(UserRepository userRepository, PasswordEncoder passwordEncoder) {
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
    }

    /**
     * Creates and saves a new user, encoding the password.
     *
     * @param user The user to be created.
     * @return The created user.
     */
    @Transactional
    public User createUser(User user) {
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        return userRepository.save(user);
    }

    /**
     * Retrieves a user by their ID.
     *
     * @param id The ID of the user to retrieve.
     * @return An Optional containing the user if found, or empty if not found.
     */
    public Optional<User> getUserById(Long id) {
        return userRepository.findById(id);
    }

    /**
     * Retrieves all users in the system.
     *
     * @return A list of all users.
     */
    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    /**
     * Updates the information of an existing user, including password encoding if changed.
     *
     * @param id           The ID of the user to update.
     * @param userDetails  The updated user information.
     * @return The updated user entity.
     * @throws EntityNotFoundException if the user with the specified ID is not found.
     */
    @Transactional
    public User updateUser(Long id, User userDetails) {
        User existingUser = userRepository.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("User with ID " + id + " not found"));
        // Update logic, including password encoding if password is changed
        return userRepository.save(existingUser);
    }

    /**
     * Deletes a user by their ID.
     *
     * @param id The ID of the user to delete.
     */
    @Transactional
    public void deleteUser(Long id) {
        userRepository.deleteById(id);
    }

    // Additional methods as per your business logic
}
