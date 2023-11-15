package com.Canitas02.FralarmSecurity.model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import lombok.NoArgsConstructor;

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

    private String password; // In a real-world application, this should be encoded

    private String email;

    private String role; // In a real-world application, consider using an Enum for roles

    // Constructors, getters, and setters are managed by Lombok

    /**
     * Constructs a new User with the specified information.
     *
     * @param username The username of the user.
     * @param password The password of the user (Note: In a real-world application, this should be securely encoded).
     * @param email    The email address of the user.
     * @param role     The role of the user (e.g., "ADMIN", "USER").
     */
    public User(String username, String password, String email, String role) {
        this.username = username;
        this.password = password;
        this.email = email;
        this.role = role;
    }
}
