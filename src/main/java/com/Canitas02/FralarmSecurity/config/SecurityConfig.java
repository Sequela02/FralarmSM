package com.Canitas02.FralarmSecurity.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

/**
 * Security configuration class for the FrAlarm Security Management System.
 * Defines beans related to security aspects of the application, including
 * password encoding.
 */
@Configuration
public class SecurityConfig {

    /**
     * Creates a bean for password encoding.
     * The BCryptPasswordEncoder is a strong, widely-used password encoder.
     *
     * @return A PasswordEncoder instance using BCrypt hashing algorithm.
     */
    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }
}
