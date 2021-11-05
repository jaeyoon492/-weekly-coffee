package com.weeklycoffee.partner.domain.registration;

import com.weeklycoffee.partner.domain.registration.dto.RegistrationRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
public class RegistrationController {

    private final RegistrationRepository repo;
    private final RegistrationService service;

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
        // 입력저장 할때는 dto를 쓰는데 메세지로 보낼때도 dto를 쓰는게 좋을까?
        service.sendRegistration(registration);

        return null;
    }
}
