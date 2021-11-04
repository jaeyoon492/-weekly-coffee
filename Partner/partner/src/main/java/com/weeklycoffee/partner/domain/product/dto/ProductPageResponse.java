package com.weeklycoffee.partner.domain.product.dto;

import com.weeklycoffee.partner.domain.product.Product;
import com.weeklycoffee.partner.domain.subscribe.Subscribe;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.domain.Page;

@Data
@NoArgsConstructor
@Builder
public class ProductPageResponse {

    private Page<Product> pages;

    public ProductPageResponse(Page<Product>page){
        this.pages = page;
    }
}
