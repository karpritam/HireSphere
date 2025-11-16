package com.psk.HireSphere_backend.Service;

import com.psk.HireSphere_backend.Entity.JobEntity;
import com.psk.HireSphere_backend.io.JobRequest;
import com.psk.HireSphere_backend.io.JobResponse;

import java.util.List;

public interface JobService {
    JobResponse createJob(JobRequest request);

    List<JobEntity> getAllJobs();

    JobEntity getJobById(Long id);

    JobResponse updateJob(Long id,JobRequest request);

    String deleteJob(Long id);
}
