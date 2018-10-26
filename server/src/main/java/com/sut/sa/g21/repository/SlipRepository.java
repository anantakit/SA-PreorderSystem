package com.sut.sa.g21.repository;

import com.sut.sa.g21.entity.Status;
import com.sut.sa.g21.entity.ShippingSlip;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;


import java.util.Collection;
@RepositoryRestResource
public
interface SlipRepository extends JpaRepository<ShippingSlip, Long> {
    Collection<ShippingSlip> findByStatus(Status status);
}