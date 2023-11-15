package com.Canitas02.FralarmSecurity.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Getter;
import lombok.Setter;
import lombok.NoArgsConstructor;

/**
 * Represents a client in the FrAlarm Security Management System.
 */
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

    /**
     * Constructs a new Client with the specified information.
     *
     * @param name        The name of the client.
     * @param email       The email address of the client.
     * @param address     The address of the client.
     * @param phoneNumber The contact phone number of the client.
     * @param company     The associated company, if applicable.
     */
    public Client(String name, String email, String address, String phoneNumber, String company) {
        this.name = name;
        this.email = email;
        this.address = address;
        this.phoneNumber = phoneNumber;
        this.company = company;
    }
}

