package com.sut.sa.g21.repository;

import com.sut.sa.g21.entity.Payment;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

@RepositoryRestResource
@CrossOrigin(origins = "http://localhost:4200")
public interface PaymentRepository extends JpaRepository<Payment,Long> {

}
