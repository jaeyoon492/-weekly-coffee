package com.weeklycoffee.partner.domain.subscribe;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SubscribeDetailRepository extends JpaRepository<SubscribeDetail, SubscribeDetailId> {
}
