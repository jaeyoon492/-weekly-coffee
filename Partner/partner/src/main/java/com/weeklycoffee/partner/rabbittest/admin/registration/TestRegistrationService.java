package com.weeklycoffee.partner.rabbittest.admin.registration;

import com.weeklycoffee.partner.domain.registration.Registration;
import org.springframework.amqp.rabbit.annotation.RabbitListener;
import org.springframework.stereotype.Service;

@Service
public class TestRegistrationService {

    @RabbitListener(queues = "partner.registration.send")
    public void receiveRegistration(RegistrationResponse testRegistration){
        showRegistration(testRegistration);
    }

    public Registration showRegistration(RegistrationResponse testRegistration){

        Registration registration = Registration.builder()
                .id(testRegistration.getId())
                .memberId(testRegistration.getMemberId())
                .businessRegistrationNumber(testRegistration.getBusinessRegistrationNumber())
                .ceoName(testRegistration.getCeoName())
                .companyIntroduce(testRegistration.getCompanyIntroduce())
                .companyAddress(testRegistration.getCompanyAddress())
                .companyContact(testRegistration.getCompanyContact())
                .companyEmail(testRegistration.getCompanyEmail())
                .bank(testRegistration.getBank())
                .bankAccount(testRegistration.getBankAccount())
                .registrationDate(testRegistration.getRegistrationDate())
                .build();

        System.out.println("입점신청알림!!!!" + registration);

        return null;
    }

}
