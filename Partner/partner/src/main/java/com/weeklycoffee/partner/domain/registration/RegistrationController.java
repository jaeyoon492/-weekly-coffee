package com.weeklycoffee.partner.domain.registration;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
public class RegistrationController {

    private RegistrationRepository repo;
    private RegistrationService service;

    @Autowired
    public RegistrationController(RegistrationRepository repo, RegistrationService service) {
        this.repo = repo;
        this.service = service;
    }

    @PostMapping("/registration/{memberId}")
    public Registration createRegistrationForm(@RequestBody RegistrationRequest registrationRequest, @PathVariable long memberId) {

        Registration registration = Registration.builder()
                .memberId(memberId)
                .businessRegistrationNumber(registrationRequest.getBusinessRegistrationNumber())
                .ceoName(registrationRequest.getCeoName())
                .companyIntroduce(registrationRequest.getCompanyIntroduce())
                .companyAddress(registrationRequest.getCompanyAddress())
                .companyContact(registrationRequest.getCompanyContact())
                .companyEmail(registrationRequest.getCompanyEmail())
                .bank(registrationRequest.getBank())
                .bankAccount(registrationRequest.getBankAccount())
                .registrationDate(registrationRequest.getRegistrationDate())
                .build();

        repo.save(registration);
        service.sendRegistration(registration);

        return null;
    }
}
