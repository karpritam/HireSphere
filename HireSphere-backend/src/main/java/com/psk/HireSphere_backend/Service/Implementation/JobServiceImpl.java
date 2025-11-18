package com.psk.HireSphere_backend.Service.Implementation;

import com.psk.HireSphere_backend.Entity.JobEntity;
import com.psk.HireSphere_backend.Repository.JobRepository;
import com.psk.HireSphere_backend.Service.JobService;
import com.psk.HireSphere_backend.io.JobRequest;
import com.psk.HireSphere_backend.io.JobResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class JobServiceImpl implements JobService {

    private final JobRepository jobRepository;

    @Override
    public JobResponse createJob(JobRequest request) {
        JobEntity job=JobEntity.builder()
                .title(request.getTitle())
                .company(request.getCompany())
                .location(request.getLocation())
                .salaryRange(request.getSalaryRange())
                .jobType(request.getJobType())
                .experienceLevel(request.getExperienceLevel())
                .techStack(request.getTechStack())
                .description(request.getDescription())
                .build();
         JobEntity saved=jobRepository.save(job);
         return toResponse(saved);
    }

    private JobResponse toResponse(JobEntity saved) {
        return JobResponse.builder()
                .id(saved.getId())
                .title(saved.getTitle())
                .company(saved.getCompany())
                .location(saved.getLocation())
                .salaryRange(saved.getSalaryRange())
                .jobType(saved.getJobType())
                .experienceLevel(saved.getExperienceLevel())
                .techStack(saved.getTechStack())
                .description(saved.getDescription())
                .createdAt(saved.getCreatedAt().toString())
                .updatedAt(saved.getUpdatedAt().toString())
                .build();
    }

    @Override
    public List<JobEntity> getAllJobs() {
        return jobRepository.findAll();
    }

    @Override
    public JobEntity getJobById(Long id) {
        return jobRepository.findById(id)
                .orElseThrow(()->new RuntimeException("Job not found"));
    }

    @Override
    public JobResponse updateJob(Long id, JobRequest request) {
        JobEntity job=jobRepository.findById(id)
                .orElseThrow(()->new RuntimeException("Job not found"));

        job.setTitle(request.getTitle());
        job.setCompany(request.getCompany());
        job.setLocation(request.getLocation());
        job.setSalaryRange(request.getSalaryRange());
        job.setJobType(request.getJobType());
        job.setExperienceLevel(request.getExperienceLevel());
        job.setTechStack(request.getTechStack());
        job.setDescription(request.getDescription());

        JobEntity updated=jobRepository.save(job);
        return toResponse(updated);
    }

    @Override
    public String deleteJob(Long id) {
        JobEntity job=jobRepository.findById(id)
                .orElseThrow(()->new RuntimeException("Job not found"));

        jobRepository.delete(job);
        return "Job deleted successfully";
    }
}
