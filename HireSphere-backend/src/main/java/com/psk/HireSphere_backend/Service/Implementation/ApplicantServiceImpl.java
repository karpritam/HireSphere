package com.psk.HireSphere_backend.Service.Implementation;

import com.psk.HireSphere_backend.Entity.ApplicantEntity;
import com.psk.HireSphere_backend.Entity.JobEntity;
import com.psk.HireSphere_backend.Repository.ApplicantRepository;
import com.psk.HireSphere_backend.Repository.JobRepository;
import com.psk.HireSphere_backend.Service.ApplicantService;
import com.psk.HireSphere_backend.io.ApplicantRequest;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.List;

@Service
@RequiredArgsConstructor
public class ApplicantServiceImpl implements ApplicantService {

    private final ApplicantRepository applicantRepository;
    private final JobRepository jobRepository;

    @Override
    public ApplicantEntity applyForJob(Long jobId, ApplicantRequest request, MultipartFile resumeFile) {
        // PDF Validation
        if (!resumeFile.getContentType().equals("application/pdf")) {
            throw new RuntimeException("Only PDF files are allowed");
        }

        JobEntity job=jobRepository.findById(jobId)
                .orElseThrow(()->new RuntimeException("Job not found"));

        String folder = "uploads/resumes/";
        String fileName = System.currentTimeMillis() + "_" + resumeFile.getOriginalFilename();
        Path filePath = Paths.get(folder + fileName);

        try{
            Files.createDirectories((filePath.getParent()));
            Files.write(filePath,resumeFile.getBytes());
        }catch (IOException e){
            throw new RuntimeException("Resume upload failed: " + e.getMessage());
        }


        ApplicantEntity applicant=ApplicantEntity.builder()
                .name(request.getName())
                .email(request.getEmail())
                .mobile(request.getPhone())
                .resumeUrl("http://localhost:8080/uploads/resumes/" + fileName)
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
