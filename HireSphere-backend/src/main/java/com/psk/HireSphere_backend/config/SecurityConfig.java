package com.psk.HireSphere_backend.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
public class SecurityConfig {

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {

        http
                .csrf(csrf -> csrf.disable())
                .authorizeHttpRequests(auth -> auth

                        // Public
                        .requestMatchers("/auth/**").permitAll()
                        .requestMatchers(HttpMethod.GET, "/jobs/**").permitAll()

                        // USER
                        .requestMatchers("/applicants/apply/**")
                        .hasRole("USER")

                        // ADMIN
                        .requestMatchers("/jobs/**").hasRole("ADMIN")
                        .requestMatchers("/applicants/**").hasRole("ADMIN")

                        .anyRequest().authenticated()
                );

        return http.build();
    }

}
