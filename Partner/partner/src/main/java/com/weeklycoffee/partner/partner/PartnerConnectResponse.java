package com.weeklycoffee.partner.partner;

import com.weeklycoffee.partner.member.Member;
import com.weeklycoffee.partner.product.Product;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.domain.Page;

import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class PartnerConnectResponse {
    private long id;
    private Page<Product> pages;

    private String businessRegistrationNumber;
    private String ceoName;
    private String companyName;
    private String companyContact;
    private String companyAddress;
    private String companyIntroduce;
    private String companyEmail;

    public PartnerConnectResponse(Partner partner, Page<Product> page){
        this.id = partner.getId();
        this.pages = page;
        this.businessRegistrationNumber = partner.getBusinessRegistrationNumber();
        this.ceoName = partner.getCeoName();
        this.companyName = partner.getCompanyName();
        this.companyContact = partner.getCompanyContact();
        this.companyAddress = partner.getCompanyAddress();
        this.companyIntroduce = partner.getCompanyIntroduce();
        this.companyEmail = partner.getCompanyEmail();
    }
}
