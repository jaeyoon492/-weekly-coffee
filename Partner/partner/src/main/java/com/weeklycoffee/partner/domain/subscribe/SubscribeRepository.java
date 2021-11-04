package com.weeklycoffee.partner.domain.subscribe;

import com.weeklycoffee.partner.domain.product.Product;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface SubscribeRepository extends JpaRepository<Subscribe, Long> {
    Page<Subscribe> findByPartnerId(Pageable page, long partnerId);
}
