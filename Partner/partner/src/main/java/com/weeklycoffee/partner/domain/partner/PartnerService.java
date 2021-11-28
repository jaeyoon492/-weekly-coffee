package com.weeklycoffee.partner.domain.partner;

import com.weeklycoffee.partner.domain.member.Member;
import com.weeklycoffee.partner.domain.member.MemberRepository;
import com.weeklycoffee.partner.domain.partner.dto.PartnerConfirmResponse;
import org.springframework.amqp.rabbit.annotation.RabbitListener;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class PartnerService {
    private final PartnerRepository partnerRepo;
    private final MemberRepository memberRepo;

    @Autowired
    public PartnerService(PartnerRepository partnerRepo, MemberRepository memberRepo) {
        this.partnerRepo = partnerRepo;
        this.memberRepo = memberRepo;
    }

    // admin -> partner (MQ)
    @RabbitListener(queues = "admin.partner.send")
    public void receivePartnerConfirm(PartnerConfirmResponse partnerConfirm) {
        System.out.println("어드민 메세지");
        Partner partner = savePartner(partnerConfirm);
        mergeToMember(partner);
    }

    public Partner savePartner(PartnerConfirmResponse partnerConfirm) {
        Partner toPartner = Partner.builder()
                .memberId(partnerConfirm.getMemberId())
                .businessRegistrationNumber(partnerConfirm.getBusinessRegistrationNumber())
                .ceoName(partnerConfirm.getCeoName())
                .companyName(partnerConfirm.getCompanyName())
                .companyContact(partnerConfirm.getCompanyContact())
                .companyAddress(partnerConfirm.getCompanyAddress())
                .companyIntroduce(partnerConfirm.getCompanyIntroduce())
                .companyEmail(partnerConfirm.getCompanyEmail())
                .build();
        Partner partner = partnerRepo.save(toPartner);

        System.out.println("파트너 저장됨");
        return partner;
    }

    public void mergeToMember(Partner partner) {
        Optional<Member> memberOptional = memberRepo.findById(partner.getMemberId());
        Member member = memberOptional.get();
        member.setPartner(partner);
        member.setPartnerState(true);

        memberRepo.save(member);
    }


}

