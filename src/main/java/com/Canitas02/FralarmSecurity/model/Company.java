package com.Canitas02.FralarmSecurity.model;

import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import lombok.NoArgsConstructor;
import java.util.HashSet;
import java.util.Set;

/**
 * Represents a company in the FrAlarm Security Management System.
 */
@Entity
@Getter
@Setter
@NoArgsConstructor
public class Company {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    private String address;
    private String contactNumber; // Contact number for the company

    @OneToMany(mappedBy = "company", cascade = CascadeType.ALL, orphanRemoval = true)
    @JsonBackReference
    private Set<Location> locations = new HashSet<>();

    @OneToMany(mappedBy = "company", cascade = CascadeType.ALL, orphanRemoval = true)
    @JsonBackReference
    private Set<Client> clients = new HashSet<>();

    /**
     * Constructs a new Company with the specified information.
     *
     * @param name          The name of the company.
     * @param address       The address of the company.
     * @param contactNumber The contact number for the company.
     */
    public Company(String name, String address, String contactNumber) {
        this.name = name;
        this.address = address;
        this.contactNumber = contactNumber;
    }

    // Additional functionalities or methods can be added as needed.
}
