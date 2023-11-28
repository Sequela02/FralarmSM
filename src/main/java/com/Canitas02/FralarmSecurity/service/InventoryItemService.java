package com.Canitas02.FralarmSecurity.service;

import com.Canitas02.FralarmSecurity.model.InventoryItem;
import com.Canitas02.FralarmSecurity.model.Location;
import com.Canitas02.FralarmSecurity.repository.InventoryItemRepository;
import com.Canitas02.FralarmSecurity.repository.LocationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import jakarta.persistence.EntityNotFoundException;
import java.util.List;
import java.util.Optional;

/**
 * Service class for managing inventory items in the FrAlarm Security Management System.
 * Provides functionalities to create, retrieve, update, and delete inventory items,
 * as well as manage their association with locations.
 */
@Service
public class InventoryItemService {

    private final InventoryItemRepository inventoryItemRepository;
    private final LocationRepository locationRepository;

    /**
     * Constructs the InventoryItemService with necessary repositories.
     *
     * @param inventoryItemRepository Repository for inventory item operations.
     * @param locationRepository      Repository for location operations.
     */
    @Autowired
    public InventoryItemService(InventoryItemRepository inventoryItemRepository, LocationRepository locationRepository) {
        this.inventoryItemRepository = inventoryItemRepository;
        this.locationRepository = locationRepository;
    }

    /**
     * Creates and saves a new inventory item.
     *
     * @param inventoryItem The inventory item to be created.
     * @return The created and saved inventory item entity.
     */
    @Transactional
    public InventoryItem createInventoryItem(InventoryItem inventoryItem) {
        return inventoryItemRepository.save(inventoryItem);
    }

    /**
     * Retrieves an inventory item by its ID.
     *
     * @param id The ID of the inventory item.
     * @return An Optional containing the inventory item if found, or empty otherwise.
     */
    public Optional<InventoryItem> getInventoryItemById(Long id) {
        return inventoryItemRepository.findById(id);
    }

    /**
     * Retrieves all inventory items in the system.
     *
     * @return A list of all inventory items.
     */
    public List<InventoryItem> getAllInventoryItems() {
        return inventoryItemRepository.findAll();
    }

    /**
     * Updates the details of an existing inventory item.
     *
     * @param id                    The ID of the inventory item to update.
     * @param inventoryItemDetails  The updated inventory item details.
     * @return The updated inventory item entity.
     * @throws EntityNotFoundException if the inventory item with the specified ID is not found.
     */
    @Transactional
    public InventoryItem updateInventoryItem(Long id, InventoryItem inventoryItemDetails) {
        InventoryItem existingInventoryItem = inventoryItemRepository.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("Inventory Item with ID " + id + " not found"));
        // Logic to update inventory item details
        return inventoryItemRepository.save(existingInventoryItem);
    }

    /**
     * Deletes an inventory item by its ID.
     *
     * @param id The ID of the inventory item to delete.
     */
    @Transactional
    public void deleteInventoryItem(Long id) {
        inventoryItemRepository.deleteById(id);
    }

    /**
     * Assigns an inventory item to a specific location.
     *
     * @param inventoryItemId The ID of the inventory item to assign.
     * @param locationId      The ID of the location to which the item is assigned.
     * @return The updated inventory item with the assigned location.
     * @throws EntityNotFoundException if either the inventory item or location is not found.
     */
    @Transactional
    public InventoryItem assignInventoryItemToLocation(Long inventoryItemId, Long locationId) {
        InventoryItem inventoryItem = inventoryItemRepository.findById(inventoryItemId)
                .orElseThrow(() -> new EntityNotFoundException("Inventory Item not found"));
        Location location = locationRepository.findById(locationId)
                .orElseThrow(() -> new EntityNotFoundException("Location not found"));
        inventoryItem.setLocation(location);
        return inventoryItemRepository.save(inventoryItem);
    }

    // Additional methods as per your business logic
}
