package com.psk.HireSphere_backend.Service.Implementation;

import com.psk.HireSphere_backend.Entity.ApplicantEntity;
import com.psk.HireSphere_backend.Entity.JobEntity;
import com.psk.HireSphere_backend.Repository.ApplicantRepository;
import com.psk.HireSphere_backend.Repository.JobRepository;
import com.psk.HireSphere_backend.Service.ApplicantSevice;
import com.psk.HireSphere_backend.io.ApplicantRequest;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class ApplicantServiceImpl implements ApplicantSevice {

    private final ApplicantRepository applicantRepository;
    private final JobRepository jobRepository;

    @Override
    public ApplicantEntity applyForJob(Long jobId, ApplicantRequest request) {
        JobEntity job=jobRepository.findById(jobId)
                .orElseThrow(()->new RuntimeException("Job not found"));

        ApplicantEntity applicant=ApplicantEntity.builder()
                .name(request.getName())
                .email(request.getEmail())
                .mobile(request.getPhone())
                .resumeUrl(request.getResumeUrl())
                .job(job)
                .build();

        return applicantRepository.save(applicant);
    }

    @Override
    public List<ApplicantEntity> getAllApplicants() {
        return applicantRepository.findAll();
    }

    @Override
    public String deleteApplicant(Long id) {

        ApplicantEntity applicant = applicantRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Applicant not found"));

        applicantRepository.delete(applicant);

        return "Applicant deleted successfully";
    }
}
