package com.Canitas02.FralarmSecurity.repository;

import com.Canitas02.FralarmSecurity.model.Location;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface LocationRepository extends JpaRepository<Location, Long> {
    // Here you can add custom query methods if needed

}