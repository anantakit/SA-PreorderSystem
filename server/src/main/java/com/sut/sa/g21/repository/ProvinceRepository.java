package com.sut.sa.g21.repository;

import com.sut.sa.g21.entity.Province;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource
    public
    interface ProvinceRepository extends JpaRepository<Province, Long> {
        
}