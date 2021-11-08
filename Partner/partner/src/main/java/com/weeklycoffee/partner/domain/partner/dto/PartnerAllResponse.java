package com.weeklycoffee.partner.domain.partner.dto;

import com.weeklycoffee.partner.domain.partner.Partner;
import com.weeklycoffee.partner.domain.product.Product;
import com.weeklycoffee.partner.domain.subscribe.Subscribe;
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
public class PartnerAllResponse {
    private long partnerId;
    private long memberId;
    private String businessRegistrationNumber;
    private String ceoName;
    private String companyName;
    private String companyContact;
    private String companyAddress;
    private String companyIntroduce;
    private String companyEmail;
    private List<Product> products;
    private List<Subscribe> subscribes;

    public PartnerAllResponse(Partner partner, List<Subscribe> subscribes, List<Product> products){
        this.partnerId = partner.getPartnerId();
        this.memberId = partner.getMemberId();
        this.products = products;
        this.subscribes = subscribes;
        this.businessRegistrationNumber = partner.getBusinessRegistrationNumber();
        this.ceoName = partner.getCeoName();
        this.companyName = partner.getCompanyName();
        this.companyContact = partner.getCompanyContact();
        this.companyAddress = partner.getCompanyAddress();
        this.companyIntroduce = partner.getCompanyIntroduce();
        this.companyEmail = partner.getCompanyEmail();
    }
}
