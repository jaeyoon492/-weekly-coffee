package com.weeklycoffee.partner.subscribe;

import com.weeklycoffee.partner.product.Product;
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
@IdClass(SubscribeDetailId.class)
public class SubscribeDetail {

    @Id
    private long SubscribeId;
    @Id
    private int seq;

    @ManyToOne
    private Product product;

    private long partnerId;

    private String productName;
    private int productPrice;
    private int beanAmount;
    private int term;
    private int orderQuantity;
    private String groundPoint;
    private String processing;
    private String productImageId;
}
