package com.weeklycoffee.partner.domain.product.dto;

import com.weeklycoffee.partner.domain.product.Product;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class ProductSalesSendRequest {
    long productId;
    int salesStatus;
}


