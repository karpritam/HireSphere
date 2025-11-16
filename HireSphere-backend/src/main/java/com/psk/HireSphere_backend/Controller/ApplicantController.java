package com.psk.HireSphere_backend.Controller;

import com.psk.HireSphere_backend.Entity.ApplicantEntity;
import com.psk.HireSphere_backend.Service.ApplicantSevice;
import com.psk.HireSphere_backend.io.ApplicantRequest;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/applicants")
@RequiredArgsConstructor
@CrossOrigin
public class ApplicantController {

    private final ApplicantSevice applicantSevice;

    // user
    @PostMapping("/apply/{jobId}")
    public ApplicantEntity applyToJob(@PathVariable Long jobId, @RequestBody ApplicantRequest request){
        return applicantSevice.applyForJob(jobId,request);
    }

    //Admin only
    @GetMapping
    public List<ApplicantEntity> getAllApplicants(){
        return applicantSevice.getAllApplicants();
    }

    //admin
    @DeleteMapping("/{id}")
    public String deleteApplicant(@PathVariable Long id){
        return applicantSevice.deleteApplicant(id);
    }
}
