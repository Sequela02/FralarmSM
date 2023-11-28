package com.Canitas02.FralarmSecurity.service;

import com.Canitas02.FralarmSecurity.model.Client;
import com.Canitas02.FralarmSecurity.model.Company;
import com.Canitas02.FralarmSecurity.repository.ClientRepository;
import com.Canitas02.FralarmSecurity.repository.CompanyRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import jakarta.persistence.EntityNotFoundException;
import java.util.List;
import java.util.Optional;

/**
 * Service class for managing clients in the FrAlarm Security Management System.
 * This service handles operations related to the creation, retrieval, update,
 * and deletion of client records, as well as associating clients with companies.
 */
@Service
public class ClientService {

    private final ClientRepository clientRepository;
    private final CompanyRepository companyRepository;

    /**
     * Autowires the necessary repositories.
     *
     * @param clientRepository  Repository for client operations.
     * @param companyRepository Repository for company operations.
     */
    @Autowired
    public ClientService(ClientRepository clientRepository, CompanyRepository companyRepository) {
        this.clientRepository = clientRepository;
        this.companyRepository = companyRepository;
    }

    /**
     * Creates and saves a new client to the repository.
     *
     * @param client The client to be created.
     * @return The saved client entity.
     */
    @Transactional
    public Client createClient(Client client) {
        return clientRepository.save(client);
    }

    /**
     * Retrieves a client by their ID.
     *
     * @param id The ID of the client.
     * @return An Optional containing the found client, if present.
     */
    public Optional<Client> getClientById(Long id) {
        return clientRepository.findById(id);
    }

    /**
     * Retrieves all clients in the repository.
     *
     * @return A list of all clients.
     */
    public List<Client> getAllClients() {
        return clientRepository.findAll();
    }

    /**
     * Updates the information of an existing client.
     *
     * @param id            The ID of the client to update.
     * @param clientDetails The updated client information.
     * @return The updated client entity.
     * @throws EntityNotFoundException if the client with the specified ID is not found.
     */
    @Transactional
    public Client updateClient(Long id, Client clientDetails) {
        Client existingClient = clientRepository.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("Client with ID " + id + " not found"));
        // Logic to update client details
        return clientRepository.save(existingClient);
    }

    /**
     * Deletes a client by their ID.
     *
     * @param id The ID of the client to be deleted.
     */
    @Transactional
    public void deleteClient(Long id) {
        clientRepository.deleteById(id);
    }

    /**
     * Assigns a client to a specific company.
     *
     * @param clientId  The ID of the client to be assigned.
     * @param companyId The ID of the company to which the client will be assigned.
     * @return The updated client entity.
     * @throws EntityNotFoundException if either the client or company is not found.
     */
    @Transactional
    public Client assignClientToCompany(Long clientId, Long companyId) {
        Client client = clientRepository.findById(clientId)
                .orElseThrow(() -> new EntityNotFoundException("Client not found"));
        Company company = companyRepository.findById(companyId)
                .orElseThrow(() -> new EntityNotFoundException("Company not found"));
        client.setCompany(company);
        return clientRepository.save(client);
    }

    // Additional methods as per your business logic
}
