package com.Canitas02.FralarmSecurity.model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import lombok.NoArgsConstructor;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

/**
 * Represents a user in the FrAlarm Security Management System.
 */
@Entity
@Getter
@Setter
@NoArgsConstructor
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String username;

    @Column(nullable = false)
    private String password; // This should be encoded in a real-world application

    @Column(unique = true, nullable = false)
    private String email;

    @Enumerated(EnumType.STRING)
    private UserRole role; // Using an Enum for roles

    // Constructors, getters, and setters are managed by Lombok

    /**
     * Constructs a new User with the specified information.
     *
     * @param username The username of the user.
     * @param password The password of the user (Note: In a real-world application, this should be securely encoded).
     * @param email    The email address of the user.
     * @param role     The role of the user.
     */
    public User(String username, String password, String email, UserRole role) {
        this.username = username;
        this.password = new BCryptPasswordEncoder().encode(password);
        this.email = email;
        this.role = role;
    }

    // Additional functionalities or methods can be added as needed.
}

/**
 * Enum representing the possible roles of a user.
 */
enum UserRole {
    ADMIN,
    USER,
    MANAGER,
    // Add other roles as needed
}
