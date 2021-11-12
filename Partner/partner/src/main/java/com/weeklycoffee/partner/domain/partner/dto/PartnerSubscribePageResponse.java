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
    private long partnerId;
    private long memberId;
    private Page<Subscribe> pages;

    public PartnerSubscribePageResponse(Partner partner, Page<Subscribe> page){
        this.partnerId = partner.getPartnerId();
        this.memberId = partner.getMemberId();
        this.pages = page;
    }
}
