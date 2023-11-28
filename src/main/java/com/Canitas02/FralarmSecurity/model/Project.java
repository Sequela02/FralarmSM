package com.Canitas02.FralarmSecurity.model;

import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import lombok.NoArgsConstructor;
import java.time.LocalDate;

/**
 * Represents a project in the FrAlarm Security Management System.
 */
@Entity
@Getter
@Setter
@NoArgsConstructor
public class Project {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    private String description;

    @Enumerated(EnumType.STRING)
    private ProjectStatus status;  // Status of the project (e.g., PLANNING, IN_PROGRESS, COMPLETED, ON_HOLD)

    private LocalDate startDate;
    private LocalDate endDate;

    @ManyToOne
    @JoinColumn(name = "client_id")
    @JsonBackReference
    private Client client;  // Link to the client entity

    @ManyToOne
    @JoinColumn(name = "location_id")
    @JsonBackReference
    private Location location; // Link to the location entity

    /**
     * Constructs a new Project with the specified information.
     *
     * @param name        The name of the project.
     * @param description The description of the project.
     * @param status      The status of the project.
     * @param startDate   The start date of the project.
     * @param endDate     The end date of the project.
     * @param client      The client associated with the project.
     * @param location    The location where the project is executed.
     */
    public Project(String name, String description, ProjectStatus status, LocalDate startDate, LocalDate endDate, Client client, Location location) {
        this.name = name;
        this.description = description;
        this.status = status;
        this.startDate = startDate;
        this.endDate = endDate;
        this.client = client;
        this.location = location;
    }

    // Additional functionalities or methods can be added as needed.
}

/**
 * Enum representing the possible statuses of a project.
 */
enum ProjectStatus {
    PLANNING,
    IN_PROGRESS,
    COMPLETED,
    ON_HOLD
}
