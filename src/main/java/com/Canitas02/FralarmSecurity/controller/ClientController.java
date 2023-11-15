package com.Canitas02.FralarmSecurity.controller;

import com.Canitas02.FralarmSecurity.model.Client;
import com.Canitas02.FralarmSecurity.service.ClientService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * Controller class for managing clients in the FrAlarm Security Management System.
 */
@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/clients")
public class ClientController {

    private final ClientService clientService;

    @Autowired
    public ClientController(ClientService clientService) {
        this.clientService = clientService;
    }

    /**
     * Create a new client.
     *
     * @param client The client to be created.
     * @return A ResponseEntity containing the created client and HTTP status code 201 (Created).
     */
    @PostMapping
    public ResponseEntity<Client> createClient(@RequestBody Client client) {
        Client newClient = clientService.createClient(client);
        return new ResponseEntity<>(newClient, HttpStatus.CREATED);
    }

    /**
     * Retrieve a client by ID.
     *
     * @param id The ID of the client to retrieve.
     * @return A ResponseEntity containing the client if found and HTTP status code 200 (OK),
     * or HTTP status code 404 (Not Found) if the client is not found.
     */
    @GetMapping("/{id}")
    public ResponseEntity<Client> getClientById(@PathVariable Long id) {
        return clientService.getClientById(id)
                .map(client -> new ResponseEntity<>(client, HttpStatus.OK))
                .orElse(new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    /**
     * Retrieve all clients.
     *
     * @return A list of all clients.
     */
    @GetMapping
    public List<Client> getAllClients() {
        return clientService.getAllClients();
    }

    /**
     * Update a client's information.
     *
     * @param id           The ID of the client to update.
     * @param clientDetails The updated client information.
     * @return A ResponseEntity containing the updated client and HTTP status code 200 (OK).
     */
    @PutMapping("/{id}")
    public ResponseEntity<Client> updateClient(@PathVariable Long id, @RequestBody Client clientDetails) {
        Client updatedClient = clientService.updateClient(id, clientDetails);
        return new ResponseEntity<>(updatedClient, HttpStatus.OK);
    }

    /**
     * Delete a client by ID.
     *
     * @param id The ID of the client to delete.
     * @return A ResponseEntity with HTTP status code 204 (No Content) upon successful deletion.
     */
    @DeleteMapping("/{id}")
    public ResponseEntity<HttpStatus> deleteClient(@PathVariable Long id) {
        clientService.deleteClient(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    // Additional endpoints as needed
}
