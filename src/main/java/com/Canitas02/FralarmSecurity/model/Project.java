package com.Canitas02.FralarmSecurity.model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import lombok.NoArgsConstructor;
import java.time.LocalDate;
import java.util.Set;

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
    private Client client;  // Link to the client entity

    // Constructors, getters, and setters are handled by Lombok

    /**
     * Constructs a new Project with the specified information.
     *
     * @param name        The name of the project.
     * @param description The description of the project.
     * @param status      The status of the project.
     * @param startDate   The start date of the project.
     * @param endDate     The end date of the project.
     * @param client      The client associated with the project.
     */
    public Project(String name, String description, ProjectStatus status, LocalDate startDate, LocalDate endDate, Client client) {
        this.name = name;
        this.description = description;
        this.status = status;
        this.startDate = startDate;
        this.endDate = endDate;
        this.client = client;
    }

    // If you have collections like tasks or inventory items, you might initialize them here
    // to avoid NullPointerException when adding to the collection.
    // Example:
    // this.tasks = new HashSet<>();
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

