package com.weeklycoffee.partner.partner;

import com.weeklycoffee.partner.member.Member;
import com.weeklycoffee.partner.subscribe.Subscribe;
import com.weeklycoffee.partner.product.Product;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.Formula;

import javax.persistence.*;
import java.util.List;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class Partner {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

//    @ElementCollection(targetClass=String.class)
//    @Formula("(SELECT p FROM product p WHERE p.partner_id = id LIMIT 4)")
//    private List<Product> products;
    private String businessRegistrationNumber;
    private String ceoName;
    private String companyName;
    private String companyContact;
    private String companyAddress;
    private String companyIntroduce;
    private String companyEmail;
}
