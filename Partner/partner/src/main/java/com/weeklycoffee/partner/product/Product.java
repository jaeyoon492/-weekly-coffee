package com.weeklycoffee.partner.product;

import com.weeklycoffee.partner.partner.Partner;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
//@IdClass(ProductId.class)
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long productId;

    @ManyToOne
    @JoinColumn(name = "partnerId")
    private Partner partner;

    private String productName;
    private String productUploadDate;
    private int productPrice;
    private String productImageId;
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
