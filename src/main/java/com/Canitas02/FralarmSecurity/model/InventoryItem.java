package com.Canitas02.FralarmSecurity.model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;

/**
 * Represents an inventory item in the FrAlarm Security Management System.
 * An inventory item may or may not be associated with a specific location.
 */
@Entity
@Getter
@Setter
@NoArgsConstructor
public class InventoryItem {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    private String description;

    private int quantity; // Current stock quantity

    private BigDecimal price; // Price per item

    @ManyToOne
    @JoinColumn(name = "location_id", nullable = true) // nullable = true makes the relationship optional
    private Location location; // Link to the location entity, if applicable

    /**
     * Constructs a new InventoryItem with the specified information.
     *
     * @param name        The name of the inventory item.
     * @param description The description of the inventory item.
     * @param quantity    The current stock quantity of the inventory item.
     * @param price       The price per item of the inventory item.
     * @param location    The location where the inventory item is stored, if applicable.
     */
    public InventoryItem(String name, String description, int quantity, BigDecimal price, Location location) {
        this.name = name;
        this.description = description;
        this.quantity = quantity;
        this.price = price;
        this.location = location;
    }

    // Additional functionalities or methods can be added as needed.
}

