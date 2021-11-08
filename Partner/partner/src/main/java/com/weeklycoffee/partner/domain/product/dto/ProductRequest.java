package com.weeklycoffee.partner.domain.product.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class ProductRequest {
    private long productId;

    private long partnerId;

    private String productName;
    private long productUploadDate;
    private int productPrice;
    private String productImageUrl;
    private int salesStatus;
    private String foodType;
    private String expirationData;
    private String manufacturer;
    private String manufacturingDate;
    private String companyName;
    private String companyIntroduce;
    private String companyAddress;
    private String companyContact;
    private String beanType;
    private String beanTag;
    private String processing;
    private String country;
    private String region;
    private String farm;
    private String cupNote;
    private String roastingPoint;
    private String variety;
}
