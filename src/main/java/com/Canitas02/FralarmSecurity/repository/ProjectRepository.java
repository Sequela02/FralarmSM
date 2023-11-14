package com.Canitas02.FralarmSecurity.repository;
import  com.Canitas02.FralarmSecurity.model.Project;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository

public interface ProjectRepository extends JpaRepository<Project, Long> {
    // Here you can add custom query methods if needed
}