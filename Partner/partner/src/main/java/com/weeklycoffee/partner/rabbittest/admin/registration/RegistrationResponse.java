package com.weeklycoffee.partner.rabbittest.admin.registration;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class RegistrationResponse {
    private long registrationId;

    private long memberId;
    private String businessRegistrationNumber;
    private String ceoName;
    private String companyIntroduce;
    private String companyAddress;
    private String companyContact;
    private String companyEmail;
    private String companyName;
    private String bank;
    private String bankAccount;
    private String registrationDate;
}
