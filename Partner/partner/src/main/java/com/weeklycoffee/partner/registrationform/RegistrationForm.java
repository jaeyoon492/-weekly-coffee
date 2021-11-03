package com.weeklycoffee.partner.registrationform;

import com.weeklycoffee.partner.member.Member;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class RegistrationForm {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @OneToOne //단방향 -> Member
    @JoinColumn(name = "memberId")
    private Member member;

    private String businessRegistrationNumber;
    private String ceoName;
    private String companyIntroduce;
    private String companyAddress;
    private String companyContact;
    private String companyEmail;
    private String bank;
    private String bankAccount;
    private String registrationDate;
}
