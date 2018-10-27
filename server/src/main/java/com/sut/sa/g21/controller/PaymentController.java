package com.sut.sa.g21.controller;

import com.sut.sa.g21.entity.*;
import com.sut.sa.g21.repository.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.sql.Timestamp;
import java.util.Collection;
import java.util.stream.Collectors;

@RestController
public class PaymentController {

    @Autowired
    StorageRepository storageRepository;
    @Autowired
    UserRepository userInfoRepository;
    @Autowired
    PaymentRepository paymentRepository;
    @Autowired
    PreorderRepository preorderRepository;
    @Autowired
    StatusRepository statusRepository;

    @PostMapping("/payments/{preorderNumber}/{fileName}")
    @CrossOrigin(origins = "http://localhost:4200")
    @Transactional
    public Payment newPayment(@RequestBody Payment newPayment,
                                    @PathVariable Long preorderNumber, @PathVariable String fileName){
        Preorder preorder = preorderRepository.findById(preorderNumber).get();
        Status status = statusRepository.findById(2L).get();
        preorder.setStatus(status);
        newPayment.setPreorder(preorder);
        newPayment.setSubmitTime(new Timestamp(System.currentTimeMillis()));
        StorageFile sto = storageRepository.findByfileName(fileName);
        newPayment.setStorageFile(sto);
        return paymentRepository.save(newPayment);
    }

    @GetMapping("/{userName}")
    @CrossOrigin(origins = "http://localhost:4200")
    public User getUserFullName(@PathVariable String userName){
        return userInfoRepository.findByuserUsername(userName);
    }

    @GetMapping("/payments/{userName}")
    @CrossOrigin(origins = "http://localhost:4200")
    public Collection<Preorder> getPayment(@PathVariable String userName){
        return preorderRepository.findByUser(userInfoRepository.findByuserUsername(userName)).stream().filter(this::notPay)
                .collect(Collectors.toList());
    }

    private boolean notPay(Preorder preorderEntity) {
        return  preorderEntity.getStatus().getStatusId()==1L;
    }

    @PostMapping("/upload")
    @CrossOrigin(origins = "http://localhost:4200")
    public String upload(@RequestParam("file") MultipartFile file){
        try {
            StorageFile newfile = new StorageFile(file.getOriginalFilename()
                    ,file.getContentType(), file.getBytes());
            storageRepository.save(newfile);
            return "File uploaded successfully! -> filename = " + file.getOriginalFilename();
        } catch (Exception e) {
            return e.getMessage();
        }
    }

}
