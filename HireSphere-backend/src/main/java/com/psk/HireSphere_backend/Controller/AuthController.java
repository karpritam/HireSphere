package com.psk.HireSphere_backend.Controller;


import com.psk.HireSphere_backend.Entity.Role;
import com.psk.HireSphere_backend.Entity.Users;
import com.psk.HireSphere_backend.Repository.UserRepository;
import com.psk.HireSphere_backend.Util.JwtUtil;

import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/auth")
@CrossOrigin
public class AuthController {

    private final UserRepository userRepo;
    private final PasswordEncoder encoder;
    private final JwtUtil jwtUtil;

    public AuthController(UserRepository userRepo,
                          PasswordEncoder encoder,
                          JwtUtil jwtUtil) {
        this.userRepo = userRepo;
        this.encoder = encoder;
        this.jwtUtil = jwtUtil;
    }

    @PostMapping("/register")
    public String register(@RequestBody Users user) {
        user.setPassword(encoder.encode(user.getPassword()));
        user.setRole(Role.ROLE_USER);
        userRepo.save(user);
        return "User registered successfully";
    }

    @PostMapping("/login")
    public String login(@RequestBody Users user) {
        Users dbUser = userRepo.findByUsername(user.getUsername())
                .orElseThrow(() -> new RuntimeException("User not found"));

        if (!encoder.matches(user.getPassword(), dbUser.getPassword())) {
            throw new RuntimeException("Invalid credentials");
        }

        return jwtUtil.generateToken(
                dbUser.getUsername(),
                dbUser.getRole().name()
        );
    }
}
