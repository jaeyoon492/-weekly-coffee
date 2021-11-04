package com.weeklycoffee.partner.rabbittest.admin.confirm;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class PartnerConfirmRequest {
    private long memberId;
    private String businessRegistrationNumber;
    private String ceoName;
    private String companyName;
    private String companyContact;
    private String companyAddress;
    private String companyIntroduce;
    private String companyEmail;
}
