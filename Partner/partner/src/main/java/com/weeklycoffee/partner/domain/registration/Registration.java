package com.weeklycoffee.partner.domain.registration;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class Registration {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    private long memberId;
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
