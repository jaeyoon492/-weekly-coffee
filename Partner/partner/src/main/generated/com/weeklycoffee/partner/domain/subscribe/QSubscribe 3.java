package com.weeklycoffee.partner.domain.subscribe;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.processing.Generated;
import com.querydsl.core.types.Path;
import com.querydsl.core.types.dsl.PathInits;


/**
 * QSubscribe is a Querydsl query type for Subscribe
 */
@Generated("com.querydsl.codegen.DefaultEntitySerializer")
public class QSubscribe extends EntityPathBase<Subscribe> {

    private static final long serialVersionUID = -957814314L;

    public static final QSubscribe subscribe = new QSubscribe("subscribe");

    public final NumberPath<Long> createdTime = createNumber("createdTime", Long.class);

    public final StringPath deliveryMemo = createString("deliveryMemo");

    public final ListPath<com.weeklycoffee.partner.domain.subscribe.subscribeDetail.SubscribeDetail, com.weeklycoffee.partner.domain.subscribe.subscribeDetail.QSubscribeDetail> details = this.<com.weeklycoffee.partner.domain.subscribe.subscribeDetail.SubscribeDetail, com.weeklycoffee.partner.domain.subscribe.subscribeDetail.QSubscribeDetail>createList("details", com.weeklycoffee.partner.domain.subscribe.subscribeDetail.SubscribeDetail.class, com.weeklycoffee.partner.domain.subscribe.subscribeDetail.QSubscribeDetail.class, PathInits.DIRECT2);

    public final StringPath location = createString("location");

    public final BooleanPath orderCheck = createBoolean("orderCheck");

    public final NumberPath<Long> partnerId = createNumber("partnerId", Long.class);

    public final DateTimePath<java.util.Date> subscribeDate = createDateTime("subscribeDate", java.util.Date.class);

    public final NumberPath<Long> subscribeId = createNumber("subscribeId", Long.class);

    public final NumberPath<Integer> subscriberId = createNumber("subscriberId", Integer.class);

    public final StringPath subscriberName = createString("subscriberName");

    public final StringPath subscriberPhone = createString("subscriberPhone");

    public final NumberPath<Integer> totalPayment = createNumber("totalPayment", Integer.class);

    public QSubscribe(String variable) {
        super(Subscribe.class, forVariable(variable));
    }

    public QSubscribe(Path<? extends Subscribe> path) {
        super(path.getType(), path.getMetadata());
    }

    public QSubscribe(PathMetadata metadata) {
        super(Subscribe.class, metadata);
    }

}

