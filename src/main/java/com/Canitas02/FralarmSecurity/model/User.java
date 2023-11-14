package com.Canitas02.FralarmSecurity.model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import lombok.NoArgsConstructor;

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
}
