package com.psk.HireSphere_backend.io;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class JobResponse {
    private Long id;
    private String title;
    private String company;
    private String location;
    private String salaryRange;
    private String jobType;
    private String experienceLevel;
    private String description;
    private String createdAt;
    private String updatedAt;
}

