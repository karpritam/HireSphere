package com.psk.HireSphere_backend.Service;

import com.psk.HireSphere_backend.Entity.ApplicantEntity;
import com.psk.HireSphere_backend.io.ApplicantRequest;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

public interface ApplicantService {

    ApplicantEntity applyForJob(Long jobId, ApplicantRequest request, MultipartFile resumeFile);

    List<ApplicantEntity> getAllApplicants();

    String deleteApplicant(Long id);
}
