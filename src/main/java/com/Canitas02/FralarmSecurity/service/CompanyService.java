package com.Canitas02.FralarmSecurity.service;

import com.Canitas02.FralarmSecurity.model.Company;
import com.Canitas02.FralarmSecurity.repository.CompanyRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import jakarta.persistence.EntityNotFoundException;
import java.util.List;
import java.util.Optional;

/**
 * Service class for managing companies in the FrAlarm Security Management System.
 * This service handles operations related to the creation, retrieval, update,
 * and deletion of company records.
 */
@Service
public class CompanyService {

    private final CompanyRepository companyRepository;

    /**
     * Autowires the CompanyRepository to enable interaction with the database.
     *
     * @param companyRepository The repository for company-related operations.
     */
    @Autowired
    public CompanyService(CompanyRepository companyRepository) {
        this.companyRepository = companyRepository;
    }

    /**
     * Creates and saves a new company to the repository.
     *
     * @param company The company to be created.
     * @return The saved company entity.
     */
    @Transactional
    public Company createCompany(Company company) {
        return companyRepository.save(company);
    }

    /**
     * Retrieves a company by its ID.
     *
     * @param id The ID of the company.
     * @return An Optional containing the found company, if present.
     */
    public Optional<Company> getCompanyById(Long id) {
        return companyRepository.findById(id);
    }

    /**
     * Retrieves all companies in the repository.
     *
     * @return A list of all companies.
     */
    public List<Company> getAllCompanies() {
        return companyRepository.findAll();
    }

    /**
     * Updates the information of an existing company.
     *
     * @param id              The ID of the company to update.
     * @param companyDetails  The updated company information.
     * @return The updated company entity.
     * @throws EntityNotFoundException if the company with the specified ID is not found.
     */
    @Transactional
    public Company updateCompany(Long id, Company companyDetails) {
        Company existingCompany = companyRepository.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("Company with ID " + id + " not found"));
        // Logic to update company details
        return companyRepository.save(existingCompany);
    }

    /**
     * Deletes a company by its ID.
     *
     * @param id The ID of the company to be deleted.
     */
    @Transactional
    public void deleteCompany(Long id) {
        companyRepository.deleteById(id);
    }

    // Additional methods as per your business logic
}
