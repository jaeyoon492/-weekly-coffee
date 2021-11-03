package com.weeklycoffee.partner.subscribe;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface SubscribeRepository extends JpaRepository<Subscribe, Long> {

    public List<Subscribe> findByPartnerId (long partnerId);
}
