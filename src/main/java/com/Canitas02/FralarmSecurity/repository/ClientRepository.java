package com.Canitas02.FralarmSecurity.repository;
import  com.Canitas02.FralarmSecurity.model.Client;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ClientRepository extends JpaRepository<Client, Long> {
    // Here you can add custom query methods if needed
}