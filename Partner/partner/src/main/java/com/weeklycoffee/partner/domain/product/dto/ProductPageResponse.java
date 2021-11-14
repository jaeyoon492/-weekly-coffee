package com.weeklycoffee.partner.domain.product.dto;

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
public class ProductPageResponse {

    private boolean isLast;
    private long totalElements;
    private List<Product> content;
}
