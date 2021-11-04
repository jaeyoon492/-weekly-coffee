package com.weeklycoffee.partner.domain.registration.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class RegistrationRequest {
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
