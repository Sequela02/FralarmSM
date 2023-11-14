package com.Canitas02.FralarmSecurity.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Getter;
import lombok.Setter;
import lombok.NoArgsConstructor;

@Entity
@Getter
@Setter
@NoArgsConstructor
public class Client {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    private String email;
    private String address;       // Address of the client
    private String phoneNumber;   // Contact phone number
    private String company;       // Associated company, if applicable

    // Constructors, getters, and setters are handled by Lombok

    // Example of a constructor with all fields
    public Client(String name, String email, String address, String phoneNumber, String company) {
        this.name = name;
        this.email = email;
        this.address = address;
        this.phoneNumber = phoneNumber;
        this.company = company;
    }
}

