package com.Canitas02.FralarmSecurity.controller;

import com.Canitas02.FralarmSecurity.model.InventoryItem;
import com.Canitas02.FralarmSecurity.service.InventoryItemService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * Controller class for managing inventory items in the FrAlarm Security Management System.
 */
@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/inventory")
public class InventoryItemController {

    private final InventoryItemService inventoryItemService;

    @Autowired
    public InventoryItemController(InventoryItemService inventoryItemService) {
        this.inventoryItemService = inventoryItemService;
    }

    /**
     * Create a new inventory item.
     *
     * @param inventoryItem The inventory item to be created.
     * @return A ResponseEntity containing the created inventory item and HTTP status code 201 (Created).
     */
    @PostMapping
    public ResponseEntity<InventoryItem> createInventoryItem(@RequestBody InventoryItem inventoryItem) {
        InventoryItem newItem = inventoryItemService.createInventoryItem(inventoryItem);
        return new ResponseEntity<>(newItem, HttpStatus.CREATED);
    }

    /**
     * Retrieve an inventory item by ID.
     *
     * @param id The ID of the inventory item to retrieve.
     * @return A ResponseEntity containing the inventory item if found and HTTP status code 200 (OK),
     * or HTTP status code 404 (Not Found) if the inventory item is not found.
     */
    @GetMapping("/{id}")
    public ResponseEntity<InventoryItem> getInventoryItemById(@PathVariable Long id) {
        return inventoryItemService.getInventoryItemById(id)
                .map(item -> new ResponseEntity<>(item, HttpStatus.OK))
                .orElse(new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    /**
     * Retrieve all inventory items.
     *
     * @return A list of all inventory items.
     */
    @GetMapping
    public List<InventoryItem> getAllInventoryItems() {
        return inventoryItemService.getAllInventoryItems();
    }

    /**
     * Update an inventory item's information.
     *
     * @param id                    The ID of the inventory item to update.
     * @param inventoryItemDetails  The updated inventory item information.
     * @return A ResponseEntity containing the updated inventory item and HTTP status code 200 (OK).
     */
    @PutMapping("/{id}")
    public ResponseEntity<InventoryItem> updateInventoryItem(@PathVariable Long id, @RequestBody InventoryItem inventoryItemDetails) {
        InventoryItem updatedItem = inventoryItemService.updateInventoryItem(id, inventoryItemDetails);
        return new ResponseEntity<>(updatedItem, HttpStatus.OK);
    }

    /**
     * Delete an inventory item by ID.
     *
     * @param id The ID of the inventory item to delete.
     * @return A ResponseEntity with HTTP status code 204 (No Content) upon successful deletion.
     */
    @DeleteMapping("/{id}")
    public ResponseEntity<HttpStatus> deleteInventoryItem(@PathVariable Long id) {
        inventoryItemService.deleteInventoryItem(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    // Additional endpoints as needed
}
