package com.Canitas02.FralarmSecurity.controller;

import com.Canitas02.FralarmSecurity.model.Project;
import com.Canitas02.FralarmSecurity.service.ProjectService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * Controller class for managing projects in the FrAlarm Security Management System.
 */
@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/projects")
public class ProjectController {

    private final ProjectService projectService;

    @Autowired
    public ProjectController(ProjectService projectService) {
        this.projectService = projectService;
    }

    /**
     * Create a new project.
     *
     * @param project The project to be created.
     * @return A ResponseEntity containing the created project and HTTP status code 201 (Created).
     */
    @PostMapping
    public ResponseEntity<Project> createProject(@RequestBody Project project) {
        Project newProject = projectService.createProject(project);
        return new ResponseEntity<>(newProject, HttpStatus.CREATED);
    }

    /**
     * Retrieve a project by ID.
     *
     * @param id The ID of the project to retrieve.
     * @return A ResponseEntity containing the project if found and HTTP status code 200 (OK),
     * or HTTP status code 404 (Not Found) if the project is not found.
     */
    @GetMapping("/{id}")
    public ResponseEntity<Project> getProjectById(@PathVariable Long id) {
        return projectService.getProjectById(id)
                .map(project -> new ResponseEntity<>(project, HttpStatus.OK))
                .orElse(new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    /**
     * Retrieve all projects.
     *
     * @return A list of all projects.
     */
    @GetMapping
    public List<Project> getAllProjects() {
        return projectService.getAllProjects(); // This should return projects with client data
    }


    /**
     * Update a project's information.
     *
     * @param id            The ID of the project to update.
     * @param projectDetails The updated project information.
     * @return A ResponseEntity containing the updated project and HTTP status code 200 (OK).
     */
    @PutMapping("/{id}")
    public ResponseEntity<Project> updateProject(@PathVariable Long id, @RequestBody Project projectDetails) {
        Project updatedProject = projectService.updateProject(id, projectDetails);
        return new ResponseEntity<>(updatedProject, HttpStatus.OK);
    }

    /**
     * Delete a project by ID.
     *
     * @param id The ID of the project to delete.
     * @return A ResponseEntity with HTTP status code 204 (No Content) upon successful deletion.
     */
    @DeleteMapping("/{id}")
    public ResponseEntity<HttpStatus> deleteProject(@PathVariable Long id) {
        projectService.deleteProject(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    // Add more endpoints as needed
}
