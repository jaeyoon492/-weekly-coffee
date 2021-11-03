package com.weeklycoffee.partner.member;

import com.weeklycoffee.partner.partner.Partner;
import com.weeklycoffee.partner.registrationform.RegistrationForm;
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
    private long id;

    private String name;
    private boolean partnerState;
}
