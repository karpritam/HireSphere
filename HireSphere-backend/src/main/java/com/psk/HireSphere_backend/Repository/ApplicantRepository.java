package com.psk.HireSphere_backend.Repository;

import com.psk.HireSphere_backend.Entity.ApplicantEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ApplicantRepository extends JpaRepository<ApplicantEntity, Long> {
}
