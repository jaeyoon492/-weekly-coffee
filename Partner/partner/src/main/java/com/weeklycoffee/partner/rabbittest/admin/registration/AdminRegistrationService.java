package com.weeklycoffee.partner.rabbittest.admin.registration;

import com.weeklycoffee.partner.domain.registration.Registration;
import com.weeklycoffee.partner.rabbittest.admin.confirm.PartnerConfirmRequest;
import org.springframework.amqp.rabbit.annotation.RabbitListener;
import org.springframework.amqp.rabbit.core.RabbitTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service
public class AdminRegistrationService {

    private RabbitTemplate rabbit;

    @Autowired
    public AdminRegistrationService(RabbitTemplate rabbit){
        this.rabbit = rabbit;
    }

    @RabbitListener(queues = "partner.registration.send")
    public void receiveRegistration(RegistrationResponse testRegistration){
        Registration registration = saveRegistration(testRegistration);
        PartnerConfirmRequest partnerRequest = convertRegistration(registration);
        sendPartnerRequest(partnerRequest);
    }

    public void sendPartnerRequest(PartnerConfirmRequest testRequest){
        rabbit.convertAndSend("admin.partner.send",testRequest);
    }

    public Registration saveRegistration(RegistrationResponse testRegistration){

        Registration registration = Registration.builder()
                .registrationId(testRegistration.getRegistrationId())
                .memberId(testRegistration.getMemberId())
                .businessRegistrationNumber(testRegistration.getBusinessRegistrationNumber())
                .ceoName(testRegistration.getCeoName())
                .companyName(testRegistration.getCompanyName())
                .companyIntroduce(testRegistration.getCompanyIntroduce())
                .companyAddress(testRegistration.getCompanyAddress())
                .companyContact(testRegistration.getCompanyContact())
                .companyEmail(testRegistration.getCompanyEmail())
                .bank(testRegistration.getBank())
                .bankAccount(testRegistration.getBankAccount())
                .registrationDate(testRegistration.getRegistrationDate())
                .build();

        System.out.println("입점신청알림!!!!" + registration);

        return registration;
    }

    public PartnerConfirmRequest convertRegistration(Registration registration){

        PartnerConfirmRequest partner = PartnerConfirmRequest.builder()
                .memberId(registration.getMemberId())
                .businessRegistrationNumber(registration.getBusinessRegistrationNumber())
                .ceoName(registration.getCeoName())
                .companyName(registration.getCompanyName())
                .companyAddress(registration.getCompanyAddress())
                .companyContact(registration.getCompanyContact())
                .companyIntroduce(registration.getCompanyIntroduce())
                .companyEmail(registration.getCompanyEmail())
                .build();

        return partner;
    }

}
