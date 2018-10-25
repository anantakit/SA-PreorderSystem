package com.sut.sa.g21.repository;

import com.sut.sa.g21.entity.Status;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource
    public
    interface StatusRepository extends JpaRepository<Status, Long> {
        Status findByStatusName(String name);
}