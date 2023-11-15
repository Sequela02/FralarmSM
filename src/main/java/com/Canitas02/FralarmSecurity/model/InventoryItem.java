package com.Canitas02.FralarmSecurity.model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;

/**
 * Represents an inventory item in the FrAlarm Security Management System.
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

    // Constructors, getters, and setters are managed by Lombok

    /**
     * Constructs a new InventoryItem with the specified information.
     *
     * @param name        The name of the inventory item.
     * @param description The description of the inventory item.
     * @param quantity    The current stock quantity of the inventory item.
     * @param price       The price per item of the inventory item.
     */
    public InventoryItem(String name, String description, int quantity, BigDecimal price) {
        this.name = name;
        this.description = description;
        this.quantity = quantity;
        this.price = price;
    }
}
