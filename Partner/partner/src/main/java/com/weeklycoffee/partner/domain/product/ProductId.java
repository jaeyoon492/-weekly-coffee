package com.weeklycoffee.partner.domain.product;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.IdClass;
import java.io.Serializable;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class ProductId implements Serializable {
    private static final long serialVersionUID = 4115897150946242178L;

    private long productId;
    private long partnerId;
}
