package com.psk.HireSphere_backend.io;

import lombok.Data;

@Data
public class ApplicantRequest {
    private String name;
    private String email;
    private String phone;
    private String resumeUrl;
}
