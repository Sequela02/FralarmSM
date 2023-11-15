package com.Canitas02.FralarmSecurity.service;

import com.Canitas02.FralarmSecurity.model.InventoryItem;
import com.Canitas02.FralarmSecurity.repository.InventoryItemRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

/**
 * Service class for managing inventory items in the FrAlarm Security Management System.
 */
@Service
public class InventoryItemService {

    private final InventoryItemRepository inventoryItemRepository;

    @Autowired
    public InventoryItemService(InventoryItemRepository inventoryItemRepository) {
        this.inventoryItemRepository = inventoryItemRepository;
    }

    /**
     * Create a new inventory item.
     *
     * @param inventoryItem The inventory item to be created.
     * @return The created inventory item.
     */
    public InventoryItem createInventoryItem(InventoryItem inventoryItem) {
        return inventoryItemRepository.save(inventoryItem);
    }

    /**
     * Retrieve an inventory item by ID.
     *
     * @param id The ID of the inventory item to retrieve.
     * @return An Optional containing the inventory item if found, or empty if not found.
     */
    public Optional<InventoryItem> getInventoryItemById(Long id) {
        return inventoryItemRepository.findById(id);
    }

    /**
     * Retrieve all inventory items.
     *
     * @return A list of all inventory items.
     */
    public List<InventoryItem> getAllInventoryItems() {
        return inventoryItemRepository.findAll();
    }

    /**
     * Update an inventory item's information.
     *
     * @param id                 The ID of the inventory item to update.
     * @param inventoryItemDetails The updated inventory item information.
     * @return The updated inventory item.
     * @throws IllegalArgumentException if the inventory item with the specified ID is not found.
     */
    public InventoryItem updateInventoryItem(Long id, InventoryItem inventoryItemDetails) {
        InventoryItem inventoryItem = inventoryItemRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("Inventory Item with ID " + id + " not found"));
        // Update inventory item details here
        return inventoryItemRepository.save(inventoryItem);
    }

    /**
     * Delete an inventory item by ID.
     *
     * @param id The ID of the inventory item to delete.
     */
    public void deleteInventoryItem(Long id) {
        inventoryItemRepository.deleteById(id);
    }

    // Additional methods as per your business logic
}
