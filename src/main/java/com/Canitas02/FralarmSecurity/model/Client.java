package com.Canitas02.FralarmSecurity.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import lombok.NoArgsConstructor;

import java.util.ArrayList;
import java.util.List;

/**
 * Represents a client in the FrAlarm Security Management System.
 * Each client can have multiple associated projects.
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

    @ManyToOne
    @JsonManagedReference
    @JoinColumn(name = "company_id") // This column in the Client table will store the foreign key
    private Company company; // This field corresponds to 'mappedBy' in Company

    @OneToMany(mappedBy = "client", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Project> projects = new ArrayList<>();

    /**
     * Constructs a new Client with the specified information.
     *
     * @param name        The name of the client.
     * @param email       The email address of the client.
     * @param address     The address of the client.
     * @param phoneNumber The contact phone number of the client.
     * @param company     The associated company.
     */
    public Client(String name, String email, String address, String phoneNumber, Company company) {
        this.name = name;
        this.email = email;
        this.address = address;
        this.phoneNumber = phoneNumber;
        this.company = company;
    }
}
