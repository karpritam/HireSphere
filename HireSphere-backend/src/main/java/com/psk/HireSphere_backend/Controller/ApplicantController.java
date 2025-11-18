package com.psk.HireSphere_backend.Controller;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.psk.HireSphere_backend.Entity.ApplicantEntity;
import com.psk.HireSphere_backend.Service.ApplicantService;
import com.psk.HireSphere_backend.io.ApplicantRequest;
import lombok.RequiredArgsConstructor;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.awt.*;
import java.util.List;

@RestController
@RequestMapping("/applicants")
@RequiredArgsConstructor
@CrossOrigin
public class ApplicantController {

    private final ApplicantService applicantService;

    // user
    @PostMapping(
            value = "/apply/{jobId}",
            consumes = MediaType.MULTIPART_FORM_DATA_VALUE
    )
    public ApplicantEntity applyToJob(
            @PathVariable Long jobId,
            @RequestParam("data") String dataJson,
            @RequestPart("resume") MultipartFile resumeFile
    ) throws Exception {

        ObjectMapper mapper = new ObjectMapper();
        ApplicantRequest dto = mapper.readValue(dataJson, ApplicantRequest.class);

        return applicantService.applyForJob(jobId, dto, resumeFile);
    }

    //Admin only
    @GetMapping
    public List<ApplicantEntity> getAllApplicants(){
        return applicantService.getAllApplicants();
    }

    //admin
    @DeleteMapping("/{id}")
    public String deleteApplicant(@PathVariable Long id){
        return applicantService.deleteApplicant(id);
    }
}
