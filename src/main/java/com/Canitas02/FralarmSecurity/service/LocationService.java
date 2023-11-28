package com.Canitas02.FralarmSecurity.service;

import com.Canitas02.FralarmSecurity.model.Location;
import com.Canitas02.FralarmSecurity.repository.LocationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import jakarta.persistence.EntityNotFoundException;
import java.util.List;
import java.util.Optional;

/**
 * Service class for managing locations in the FrAlarm Security Management System.
 * Handles operations related to the creation, retrieval, update, and deletion
 * of location records.
 */
@Service
public class LocationService {

    private final LocationRepository locationRepository;

    /**
     * Autowires the LocationRepository to enable interaction with the database.
     *
     * @param locationRepository The repository for location-related operations.
     */
    @Autowired
    public LocationService(LocationRepository locationRepository) {
        this.locationRepository = locationRepository;
    }

    /**
     * Creates and saves a new location.
     *
     * @param location The location to be created.
     * @return The saved location entity.
     */
    @Transactional
    public Location createLocation(Location location) {
        return locationRepository.save(location);
    }

    /**
     * Retrieves a location by its ID.
     *
     * @param id The ID of the location.
     * @return An Optional containing the location if found, or empty if not found.
     */
    public Optional<Location> getLocationById(Long id) {
        return locationRepository.findById(id);
    }

    /**
     * Retrieves all locations in the system.
     *
     * @return A list of all locations.
     */
    public List<Location> getAllLocations() {
        return locationRepository.findAll();
    }

    /**
     * Updates the information of an existing location.
     *
     * @param id               The ID of the location to update.
     * @param locationDetails  The updated location information.
     * @return The updated location entity.
     * @throws EntityNotFoundException if the location with the specified ID is not found.
     */
    @Transactional
    public Location updateLocation(Long id, Location locationDetails) {
        Location existingLocation = locationRepository.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("Location with ID " + id + " not found"));
        // Logic to update location details
        return locationRepository.save(existingLocation);
    }

    /**
     * Deletes a location by its ID.
     *
     * @param id The ID of the location to delete.
     */
    @Transactional
    public void deleteLocation(Long id) {
        locationRepository.deleteById(id);
    }

    // Additional methods as per your business logic
}
