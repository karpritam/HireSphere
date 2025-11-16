package com.psk.HireSphere_backend.io;

import lombok.Data;

@Data
public class JobRequest {
    private String title;
    private String company;
    private String location;
    private String salaryRange;
    private String jobType;
    private String experienceLevel;
    private String description;
}
