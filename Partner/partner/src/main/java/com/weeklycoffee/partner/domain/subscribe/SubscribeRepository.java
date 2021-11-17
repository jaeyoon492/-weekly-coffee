package com.weeklycoffee.partner.domain.subscribe;

import com.weeklycoffee.partner.domain.product.Product;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.Date;
import java.util.List;

@Repository
public interface SubscribeRepository extends JpaRepository<Subscribe, Long> {
    Page<Subscribe> findByPartnerId(Pageable page, long partnerId);
//    List<Subscribe> findByPartnerId(Sort sort, long partnerId);

    @Query(value = "SELECT * FROM SUBSCRIBE s WHERE s.partner_id = :id ORDER BY subscribe_id DESC LIMIT 10",nativeQuery = true)
    List<Subscribe> findByPartnerConnect(@Param("id")long partnerId);

    List<Subscribe> findBySubscribeDate(String date);
}
