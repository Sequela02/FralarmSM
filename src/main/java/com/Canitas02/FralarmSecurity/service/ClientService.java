package com.Canitas02.FralarmSecurity.service;

import com.Canitas02.FralarmSecurity.model.Client;
import com.Canitas02.FralarmSecurity.repository.ClientRepository;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class ClientService {

    private final ClientRepository clientRepository;

    public ClientService(ClientRepository clientRepository) {
        this.clientRepository = clientRepository;
    }

    public List<Client> findAllClients() {
        return clientRepository.findAll();
    }

    // Additional methods for CRUD operations (create, read, update, delete)
}