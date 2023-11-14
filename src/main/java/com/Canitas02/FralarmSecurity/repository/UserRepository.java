package com.Canitas02.FralarmSecurity.repository;

import com.Canitas02.FralarmSecurity.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    // You might want to find a user by username or email
    User findByUsername(String username);
    User findByEmail(String email);
}
