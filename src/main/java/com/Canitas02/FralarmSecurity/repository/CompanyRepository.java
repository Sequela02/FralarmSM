package com.Canitas02.FralarmSecurity.repository;

import com.Canitas02.FralarmSecurity.model.Company;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CompanyRepository  extends JpaRepository<Company, Long>{

}