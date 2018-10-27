package com.sut.sa.g21.repository;

import com.sut.sa.g21.entity.StorageFile;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

@RepositoryRestResource
@CrossOrigin(origins = "http://localhost:4200")
public interface StorageRepository extends JpaRepository<StorageFile,Long> {
    StorageFile findByfileName(String fileName);
}
