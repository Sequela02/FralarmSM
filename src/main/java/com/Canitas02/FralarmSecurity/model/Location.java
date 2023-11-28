package com.Canitas02.FralarmSecurity.model;

import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import lombok.NoArgsConstructor;
import java.util.HashSet;
import java.util.Set;

/**
 * Represents a physical location of a company in the FrAlarm Security Management System.
 */
@Entity
@Getter
@Setter
@NoArgsConstructor
public class Location {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String address;
    private String contactNumber; // Contact number for the location
    // Additional fields like manager, region, etc. can be added as needed

    @ManyToOne
    @JoinColumn(name = "company_id") // This column in Location table will store the foreign key
    @JsonBackReference
    private Company company; // This field corresponds to 'mappedBy' in Company


    @OneToMany(mappedBy = "location", cascade = CascadeType.ALL, orphanRemoval = true)
    @JsonBackReference
    private Set<Project> projects = new HashSet<>();

    /**
     * Constructs a new Location with the specified information.
     *
     * @param address       The address of the location.
     * @param contactNumber The contact number for the location.
     * @param company       The company this location belongs to.
     */
    public Location(String address, String contactNumber, Company company) {
        this.address = address;
        this.contactNumber = contactNumber;
        this.company = company;
    }
}
