package com.weeklycoffee.partner.domain.product;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ProductRepository extends JpaRepository<Product,Long> {
    List<Product> findByPartnerId(Sort sort, long partnerId);

//    @Query(value = "SELECT * FROM PRODUCT p WHERE p.partner_id = :id ORDER BY id DESC LIMIT 4",nativeQuery = true)
//    List<Product> findByPartnerConnect(@Param("id")long id);

    Page<Product> findByPartnerId(Pageable page, long partnerId);

}
