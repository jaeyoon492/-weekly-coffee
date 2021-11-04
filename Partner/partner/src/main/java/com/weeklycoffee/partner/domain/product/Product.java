package com.weeklycoffee.partner.domain.product;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    private long productUploadDate;
    private String productName;
    private int productPrice;
    private String productImageId;
    private int salesStatus;

    private long partnerId;
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

    private String foodType;
    private String expirationData;
    private String manufacturer;
    private String manufacturingDate;
}
