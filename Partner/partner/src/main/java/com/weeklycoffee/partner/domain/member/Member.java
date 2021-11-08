package com.weeklycoffee.partner.domain.member;

import com.weeklycoffee.partner.domain.partner.Partner;
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
public class Member {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long memberId;

    private String name;
    private boolean partnerState;

    @OneToOne
    @JoinColumn(name = "partnerId")
    private Partner partner;
}
