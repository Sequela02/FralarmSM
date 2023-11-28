package com.Canitas02.FralarmSecurity.service;

import com.Canitas02.FralarmSecurity.model.Project;
import com.Canitas02.FralarmSecurity.repository.ProjectRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import jakarta.persistence.EntityNotFoundException;
import java.util.List;
import java.util.Optional;

/**
 * Service class for managing projects in the FrAlarm Security Management System.
 * Handles operations related to the creation, retrieval, update, and deletion
 * of project records.
 */
@Service
public class ProjectService {

    private final ProjectRepository projectRepository;

    /**
     * Autowires the ProjectRepository to enable interaction with the database.
     *
     * @param projectRepository The repository for project-related operations.
     */
    @Autowired
    public ProjectService(ProjectRepository projectRepository) {
        this.projectRepository = projectRepository;
    }

    /**
     * Creates and saves a new project.
     *
     * @param project The project to be created.
     * @return The saved project entity.
     */
    @Transactional
    public Project createProject(Project project) {
        // Additional business logic can be added here before saving
        return projectRepository.save(project);
    }

    /**
     * Retrieves a project by its ID.
     *
     * @param id The ID of the project.
     * @return An Optional containing the project if found, or empty if not found.
     */
    public Optional<Project> getProjectById(Long id) {
        return projectRepository.findById(id);
    }

    /**
     * Retrieves all projects in the system.
     *
     * @return A list of all projects.
     */
    public List<Project> getAllProjects() {
        return projectRepository.findAll();
    }

    /**
     * Updates the details of an existing project.
     *
     * @param id              The ID of the project to update.
     * @param projectDetails  The updated project information.
     * @return The updated project entity.
     * @throws EntityNotFoundException if the project with the specified ID is not found.
     */
    @Transactional
    public Project updateProject(Long id, Project projectDetails) {
        Project existingProject = projectRepository.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("Project with ID " + id + " not found"));
        // Logic to update project details
        return projectRepository.save(existingProject);
    }

    /**
     * Deletes a project by its ID.
     *
     * @param id The ID of the project to delete.
     */
    @Transactional
    public void deleteProject(Long id) {
        projectRepository.deleteById(id);
    }

    // Additional methods as per your business logic
}
