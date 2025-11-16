package com.psk.HireSphere_backend.Repository;

import com.psk.HireSphere_backend.Entity.JobEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface JobRepository extends JpaRepository<JobEntity, Long> {
}
