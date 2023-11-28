package com.Canitas02.FralarmSecurity.controller;

import com.Canitas02.FralarmSecurity.model.Location;
import com.Canitas02.FralarmSecurity.service.LocationService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * REST Controller for managing locations in the FrAlarm Security Management System.
 * Provides endpoints for creating, retrieving, updating, and deleting locations.
 */
@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/locations")
public class LocationController {

    private final LocationService locationService;

    @Autowired
    public LocationController(LocationService locationService) {
        this.locationService = locationService;
    }

    /**
     * Create a new location.
     *
     * @param location The location to be created.
     * @return A ResponseEntity containing the created location and HTTP status code 201 (Created).
     */
    @PostMapping
    public ResponseEntity<Location> createLocation(@RequestBody Location location) {
        Location newLocation = locationService.createLocation(location);
        return new ResponseEntity<>(newLocation, HttpStatus.CREATED);
    }

    /**
     * Retrieve a location by ID.
     *
     * @param id The ID of the location to retrieve.
     * @return A ResponseEntity containing the location if found and HTTP status code 200 (OK),
     * or HTTP status code 404 (Not Found) if the location is not found.
     */
    @GetMapping("/{id}")
    public ResponseEntity<Location> getLocationById(@PathVariable Long id) {
        return locationService.getLocationById(id)
                .map(location -> new ResponseEntity<>(location, HttpStatus.OK))
                .orElse(new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    /**
     * Retrieve all locations.
     *
     * @return A list of all locations.
     */
    @GetMapping
    public List<Location> getAllLocations() {
        return locationService.getAllLocations();
    }

    /**
     * Update a location's information.
     *
     * @param id            The ID of the location to update.
     * @param locationDetails The updated location information.
     * @return A ResponseEntity containing the updated location and HTTP status code 200 (OK).
     */
    @PutMapping("/{id}")
    public ResponseEntity<Location> updateLocation(@PathVariable Long id, @RequestBody Location locationDetails) {
        Location updatedLocation = locationService.updateLocation(id, locationDetails);
        return new ResponseEntity<>(updatedLocation, HttpStatus.OK);
    }

    /**
     * Delete a location by ID.
     *
     * @param id The ID of the location to delete.
     * @return A ResponseEntity with HTTP status code 204 (No Content) upon successful deletion.
     */
    @DeleteMapping("/{id}")
    public ResponseEntity<HttpStatus> deleteLocation(@PathVariable Long id) {
        locationService.deleteLocation(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    // Additional endpoints as needed
}
