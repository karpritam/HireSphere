package com.psk.HireSphere_backend.io;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class ApplicantResponse {
    private Long id;
    private String name;
    private String email;
    private String phone;
    private String resumeUrl;
    private String coverLetter;
    private Long jobId;
    private String jobTitle;
    private String createdAt;
}
