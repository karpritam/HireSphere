package com.psk.HireSphere_backend.Service;

import com.psk.HireSphere_backend.Entity.ApplicantEntity;
import com.psk.HireSphere_backend.Repository.ApplicantRepository;
import com.psk.HireSphere_backend.io.ApplicantRequest;

import java.util.List;

public interface ApplicantSevice {

    ApplicantEntity applyForJob(Long jobId, ApplicantRequest request);

    List<ApplicantEntity> getAllApplicants();

    String deleteApplicant(Long id);
}
