package com.weeklycoffee.partner.domain.partner;

import com.weeklycoffee.partner.domain.product.Product;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class PartnerResponse {

    private long id;
    private List<Product> products;

    private long memberId;

    private String businessRegistrationNumber;
    private String ceoName;
    private String companyName;
    private String companyContact;
    private String companyAddress;
    private String companyIntroduce;
    private String companyEmail;

    public PartnerResponse(Partner partner, List<Product> products) {
        this.id = partner.getId();
        this.memberId = partner.getMember().getId();
        this.products = products;
        this.businessRegistrationNumber = partner.getBusinessRegistrationNumber();
        this.ceoName = partner.getCeoName();
        this.companyName = partner.getCompanyName();
        this.companyContact = partner.getCompanyContact();
        this.companyAddress = partner.getCompanyAddress();
        this.companyIntroduce = partner.getCompanyIntroduce();
        this.companyEmail = partner.getCompanyEmail();
    }


}
