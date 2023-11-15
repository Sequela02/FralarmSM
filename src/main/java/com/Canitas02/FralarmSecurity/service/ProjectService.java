package com.Canitas02.FralarmSecurity.service;

import com.Canitas02.FralarmSecurity.model.Project;
import com.Canitas02.FralarmSecurity.repository.ProjectRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

/**
 * Service class for managing projects in the FrAlarm Security Management System.
 */
@Service
public class ProjectService {

    private final ProjectRepository projectRepository;

    @Autowired
    public ProjectService(ProjectRepository projectRepository) {
        this.projectRepository = projectRepository;
    }

    /**
     * Create a new project.
     *
     * @param project The project to be created.
     * @return The created project.
     */
    public Project createProject(Project project) {
        // Additional business logic can be added here before saving
        return projectRepository.save(project);
    }

    /**
     * Retrieve a project by ID.
     *
     * @param id The ID of the project to retrieve.
     * @return An Optional containing the project if found, or empty if not found.
     */
    public Optional<Project> getProjectById(Long id) {
        return projectRepository.findById(id);
    }

    /**
     * Retrieve all projects.
     *
     * @return A list of all projects.
     */
    public List<Project> getAllProjects() {
        return projectRepository.findAll();
    }

    /**
     * Update a project's information.
     *
     * @param id            The ID of the project to update.
     * @param projectDetails The updated project information.
     * @return The updated project.
     * @throws IllegalArgumentException if the project with the specified ID is not found.
     */
    public Project updateProject(Long id, Project projectDetails) {
        Project project = projectRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("Project with ID " + id + " not found"));
        // Update project details here
        return projectRepository.save(project);
    }

    /**
     * Delete a project by ID.
     *
     * @param id The ID of the project to delete.
     */
    public void deleteProject(Long id) {
        projectRepository.deleteById(id);
    }

    // Add more methods as needed, for example to handle project status updates, etc.
}
