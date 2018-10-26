package com.sut.sa.g21.repository;

import com.sut.sa.g21.entity.ShippingProcess;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource
public
interface ProcessRepository extends JpaRepository<ShippingProcess, Long> {
    ShippingProcess findByShippingProcessId(Long shippingProcessId);
}