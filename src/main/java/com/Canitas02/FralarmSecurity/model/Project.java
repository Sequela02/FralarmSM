package com.Canitas02.FralarmSecurity.model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import lombok.NoArgsConstructor;
import java.time.LocalDate;
import java.util.Set;

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
    private ProjectStatus status;  // Assuming you have an enum for different project statuses

    private LocalDate startDate;
    private LocalDate endDate;

    @ManyToOne
    @JoinColumn(name = "client_id")
    private Client client;  // Link to the client entity

    // Other fields like tasks or inventory items can be added here
    // Example: Set<Task> tasks or Set<InventoryItem> inventoryItems

    // Constructors, getters, and setters are handled by Lombok

    // Example of a constructor with all fields
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

// Example of ProjectStatus enum
enum ProjectStatus {
    PLANNING,
    IN_PROGRESS,
    COMPLETED,
    ON_HOLD
}
