package com.weeklycoffee.partner.partner;

import com.weeklycoffee.partner.member.Member;
import com.weeklycoffee.partner.subscribe.Subscribe;
import com.weeklycoffee.partner.product.Product;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

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

    @OneToOne //단방향 -> Member
    @JoinColumn(name = "memberId")
    private Member member;

    @OneToMany //단방향 <- List<Product>
    @JoinColumn(name = "partnerId")
    private List<Product> products;

    @OneToMany
    @JoinColumn(name = "partnerId")
    private List<Subscribe> subscribes;

    private String businessRegistrationNumber;
    private String ceoName;
    private String companyName;
    private String companyContact;
    private String companyAddress;
    private String companyIntroduce;
    private String companyEmail;
}
