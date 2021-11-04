package com.weeklycoffee.partner.domain.partner.dto;

import com.weeklycoffee.partner.domain.partner.Partner;
import com.weeklycoffee.partner.domain.product.Product;
import com.weeklycoffee.partner.domain.subscribe.Subscribe;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.domain.Page;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class PartnerSubscribePageResponse {
    private long id;
    private Page<Subscribe> pages;

    private long memberId;
    private String businessRegistrationNumber;
    private String ceoName;
    private String companyName;
    private String companyContact;
    private String companyAddress;
    private String companyIntroduce;
    private String companyEmail;
    
    public PartnerSubscribePageResponse(Partner partner, Page<Subscribe> page){
        this.id = partner.getId();
        this.memberId = partner.getMemberId();
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
