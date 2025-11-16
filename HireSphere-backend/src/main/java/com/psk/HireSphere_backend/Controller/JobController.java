package com.psk.HireSphere_backend.Controller;

import com.psk.HireSphere_backend.Entity.JobEntity;
import com.psk.HireSphere_backend.Service.JobService;
import com.psk.HireSphere_backend.io.JobRequest;
import com.psk.HireSphere_backend.io.JobResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/jobs")
@RequiredArgsConstructor
@CrossOrigin
public class JobController {

    private final JobService jobService;

    // (only Admin)
    @PostMapping
    public JobResponse createJob(@RequestBody JobRequest request){
        return jobService.createJob(request);
    }

    @GetMapping
    public List<JobEntity> getAllJobs(){
        return jobService.getAllJobs();
    }

    @GetMapping("/{id}")
    public JobEntity getJobById(@PathVariable Long id){
        return jobService.getJobById(id);
    }

    // (only Admin)
    @PutMapping("/{id}")
    public JobResponse updateJob(@PathVariable Long id,@RequestBody JobRequest request){
        return jobService.updateJob(id,request);
    }

    // (only Admin)
    @DeleteMapping("/{id}")
    public String deleteJob(@PathVariable Long id){
        return jobService.deleteJob(id);
    }
}
