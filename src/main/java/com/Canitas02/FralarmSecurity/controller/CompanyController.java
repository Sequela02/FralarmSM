package com.Canitas02.FralarmSecurity.controller;

import com.Canitas02.FralarmSecurity.model.Company;
import com.Canitas02.FralarmSecurity.service.CompanyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * REST Controller for managing companies in the FrAlarm Security Management System.
 * Handles company-related operations such as creating, retrieving, updating, and deleting companies.
 */
@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/companies")
public class CompanyController {

    private final CompanyService companyService;

    @Autowired
    public CompanyController(CompanyService companyService) {
        this.companyService = companyService;
    }

    /**
     * Create a new company.
     *
     * @param company The company to be created.
     * @return A ResponseEntity containing the created company and HTTP status code 201 (Created).
     */
    @PostMapping
    public ResponseEntity<Company> createCompany(@RequestBody Company company) {
        Company newCompany = companyService.createCompany(company);
        return new ResponseEntity<>(newCompany, HttpStatus.CREATED);
    }

    /**
     * Retrieve a company by ID.
     *
     * @param id The ID of the company to retrieve.
     * @return A ResponseEntity containing the company if found and HTTP status code 200 (OK),
     * or HTTP status code 404 (Not Found) if the company is not found.
     */
    @GetMapping("/{id}")
    public ResponseEntity<Company> getCompanyById(@PathVariable Long id) {
        return companyService.getCompanyById(id)
                .map(company -> new ResponseEntity<>(company, HttpStatus.OK))
                .orElse(new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    /**
     * Retrieve all companies.
     *
     * @return A list of all companies.
     */
    @GetMapping
    public List<Company> getAllCompanies() {
        return companyService.getAllCompanies();
    }

    /**
     * Update a company's information.
     *
     * @param id             The ID of the company to update.
     * @param companyDetails The updated company information.
     * @return A ResponseEntity containing the updated company and HTTP status code 200 (OK).
     */
    @PutMapping("/{id}")
    public ResponseEntity<Company> updateCompany(@PathVariable Long id, @RequestBody Company companyDetails) {
        Company updatedCompany = companyService.updateCompany(id, companyDetails);
        return new ResponseEntity<>(updatedCompany, HttpStatus.OK);
    }

    /**
     * Delete a company by ID.
     *
     * @param id The ID of the company to delete.
     * @return A ResponseEntity with HTTP status code 204 (No Content) upon successful deletion.
     */
    @DeleteMapping("/{id}")
    public ResponseEntity<HttpStatus> deleteCompany(@PathVariable Long id) {
        companyService.deleteCompany(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    // Additional endpoints or methods as needed
}
