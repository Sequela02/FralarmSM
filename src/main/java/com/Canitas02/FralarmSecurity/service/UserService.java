package com.Canitas02.FralarmSecurity.service;

import com.Canitas02.FralarmSecurity.model.User;
import com.Canitas02.FralarmSecurity.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

/**
 * Service class for managing users in the FrAlarm Security Management System.
 */
@Service
public class UserService {

    private final UserRepository userRepository;

    @Autowired
    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    /**
     * Create a new user.
     *
     * @param user The user to be created.
     * @return The created user.
     */
    public User createUser(User user) {
        // Here you would add logic to encode the password before saving
        return userRepository.save(user);
    }

    /**
     * Retrieve a user by ID.
     *
     * @param id The ID of the user to retrieve.
     * @return An Optional containing the user if found, or empty if not found.
     */
    public Optional<User> getUserById(Long id) {
        return userRepository.findById(id);
    }

    /**
     * Retrieve all users.
     *
     * @return A list of all users.
     */
    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    /**
     * Update a user's information.
     *
     * @param id           The ID of the user to update.
     * @param userDetails  The updated user information.
     * @return The updated user.
     * @throws IllegalArgumentException if the user with the specified ID is not found.
     */
    public User updateUser(Long id, User userDetails) {
        User existingUser = userRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("User with ID " + id + " not found"));
        // Update user details here
        // Don't forget to encode the password if it's updated
        return userRepository.save(existingUser);
    }

    /**
     * Delete a user by ID.
     *
     * @param id The ID of the user to delete.
     */
    public void deleteUser(Long id) {
        userRepository.deleteById(id);
    }

    // Additional methods as per your business logic
}
