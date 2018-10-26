package com.sut.sa.g21.controller;

import java.util.Collection;
import java.util.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import com.sut.sa.g21.entity.Province;
import com.sut.sa.g21.entity.Status;
import com.sut.sa.g21.entity.ShippingProcess;
import com.sut.sa.g21.entity.ShippingSlip;
import com.sut.sa.g21.entity.Preorder;
import com.sut.sa.g21.repository.PreorderRepository;
import com.sut.sa.g21.repository.ProvinceRepository;
import com.sut.sa.g21.repository.StatusRepository;
import com.sut.sa.g21.repository.ProcessRepository;
import com.sut.sa.g21.repository.SlipRepository;

@RestController
@CrossOrigin(origins = "http://localhost:4200")

public class ShippingSlipSystemController {

    @Autowired
    private StatusRepository statusRepository;
    @Autowired
    private ProcessRepository processRepository;
    @Autowired
    private SlipRepository slipRepository;
    @Autowired
    private ProvinceRepository provinceRepository;

    @Autowired
    private PreorderRepository preorderRepository;


    // @GetMapping("/Province")
    // public Collection<Province> Province() {
    //     return provinceRepository.findAll();
    // }


    @GetMapping("/Slip")
    public Collection<ShippingSlip> ShippingSlipsort2() {
       return slipRepository.findAll();
    }

    
    @GetMapping("/Preorder2")
    public Collection<Preorder> preorder2() {
        Status target = statusRepository.findById(2L).get();
       return preorderRepository.findByStatus(target);
    }





    // --------------- ShippingProcesss---------------http://localhost:8080/ShippingProcess/addShippingProcess/ems/delivery

    @GetMapping("/ShippingProcess")
    public Collection<ShippingProcess> ShippingProcess() {
        return processRepository.findAll();
    }

    @PostMapping("/ShippingProcess/addShippingProcess/{name}/{detail}")
    public ShippingProcess newShippingProcess(@PathVariable String name, @PathVariable String detail) {
        ShippingProcess newShippingProcess = new ShippingProcess();
        newShippingProcess.setName(name);
        newShippingProcess.setDetail(detail);
        return processRepository.save(newShippingProcess);
    }

    // --------------- Shippingslips ---------------http://localhost:8080/Shippingslip/addShippingslip/MeeZa/success/1/1539710197000/1537118197000
    public Collection<ShippingSlip> ShippingSlip() {
        return slipRepository.findAll();
    }

    @PostMapping("/Shippingslip/addShippingslip/{preorderId}/{shippingProcessId}/{start}/{end}")
    public ShippingSlip newShippingslip(@PathVariable Long preorderId, @PathVariable Long shippingProcessId, @PathVariable Long start, @PathVariable Long end)  {

        Status status = statusRepository.findByStatusName("ส่งสินค้าแล้ว");
        Preorder preorder = preorderRepository.findById(preorderId).get();
        ShippingProcess newshippingProcess = processRepository.findByShippingProcessId(shippingProcessId);
        ShippingSlip newShippingslip = new ShippingSlip();

        preorder.setStatus(status);
        newShippingslip.setStatus(status);
        newShippingslip.setPreorder(preorder);
        newShippingslip.setShippingprocess(newshippingProcess);
        newShippingslip.setStart(new Date(start));
        newShippingslip.setEnd(new Date(end));
        preorderRepository.save(preorder);
        return slipRepository.save(newShippingslip);
    }
}