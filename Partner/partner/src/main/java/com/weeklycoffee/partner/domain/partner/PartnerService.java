package com.weeklycoffee.partner.domain.partner;

import com.weeklycoffee.partner.domain.member.Member;
import org.springframework.amqp.rabbit.annotation.RabbitListener;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class PartnerService {

   private PartnerRepository partnerRepo;

    @Autowired
    public PartnerService(PartnerRepository partnerRepo){
        this.partnerRepo = partnerRepo;
    }

    @RabbitListener(queues = "admin.partner.send")
    public void receivePartnerConfirm(PartnerConfirmResponse partnerConfirm){
        System.out.println("파트너 승인됨");
        savePartner(partnerConfirm);
    }

    public Partner savePartner(PartnerConfirmResponse partnerConfirm){
        Partner partner = Partner.builder()
                .member(Member.builder().id(partnerConfirm.getMemberId()).build())
                .businessRegistrationNumber(partnerConfirm.getBusinessRegistrationNumber())
                .ceoName(partnerConfirm.getCeoName())
                .companyName(partnerConfirm.getCompanyName())
                .companyContact(partnerConfirm.getCompanyContact())
                .companyAddress(partnerConfirm.getCompanyAddress())
                .companyIntroduce(partnerConfirm.getCompanyIntroduce())
                .companyEmail(partnerConfirm.getCompanyEmail())
                .build();

        System.out.println("파트너 저장됨");
        return partnerRepo.save(partner);
    }
}

