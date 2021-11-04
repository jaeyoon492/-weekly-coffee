package com.weeklycoffee.partner.domain.partner;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.weeklycoffee.partner.domain.member.Member;
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
public class Partner {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

//    @ElementCollection(targetClass = String.class)
//    @Formula("(SELECT p FROM product p WHERE p.partner_id = id LIMIT 4)")
//    private List<Product> products;

    private long memberId;
    private String businessRegistrationNumber;
    private String ceoName;
    private String companyName;
    private String companyContact;
    private String companyAddress;
    private String companyIntroduce;
    private String companyEmail;
}
