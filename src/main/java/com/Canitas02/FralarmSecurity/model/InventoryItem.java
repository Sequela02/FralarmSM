package com.Canitas02.FralarmSecurity.model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;

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

    // Consider adding a category or status if needed
    // private String category;

    // Constructors, getters, and setters are managed by Lombok
}
