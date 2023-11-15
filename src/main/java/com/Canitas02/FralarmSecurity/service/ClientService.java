package com.Canitas02.FralarmSecurity.service;

import com.Canitas02.FralarmSecurity.model.Client;
import com.Canitas02.FralarmSecurity.repository.ClientRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

/**
 * Service class for managing clients in the FrAlarm Security Management System.
 */
@Service
public class ClientService {

    private final ClientRepository clientRepository;

    @Autowired
    public ClientService(ClientRepository clientRepository) {
        this.clientRepository = clientRepository;
    }

    /**
     * Create a new client.
     *
     * @param client The client to be created.
     * @return The created client.
     */
    public Client createClient(Client client) {
        // Here you can add any pre-save logic or validations
        return clientRepository.save(client);
    }

    /**
     * Retrieve a client by ID.
     *
     * @param id The ID of the client to retrieve.
     * @return An Optional containing the client if found, or empty if not found.
     */
    public Optional<Client> getClientById(Long id) {
        return clientRepository.findById(id);
    }

    /**
     * Retrieve all clients.
     *
     * @return A list of all clients.
     */
    public List<Client> getAllClients() {
        return clientRepository.findAll();
    }

    /**
     * Update a client's information.
     *
     * @param id           The ID of the client to update.
     * @param clientDetails The updated client information.
     * @return The updated client.
     * @throws IllegalArgumentException if the client with the specified ID is not found.
     */
    public Client updateClient(Long id, Client clientDetails) {
        Client existingClient = clientRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("Client with ID " + id + " not found"));
        // Update the existing client with details from clientDetails
        // e.g., existingClient.setName(clientDetails.getName());
        return clientRepository.save(existingClient);
    }

    /**
     * Delete a client by ID.
     *
     * @param id The ID of the client to delete.
     */
    public void deleteClient(Long id) {
        clientRepository.deleteById(id);
    }

    // Additional methods as per your business logic
}
