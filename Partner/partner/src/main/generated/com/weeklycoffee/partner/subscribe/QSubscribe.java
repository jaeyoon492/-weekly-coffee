package com.weeklycoffee.partner.subscribe;

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

    private static final long serialVersionUID = -1378955700L;

    public static final QSubscribe subscribe = new QSubscribe("subscribe");

    public final StringPath cardNumber = createString("cardNumber");

    public final NumberPath<Long> createdTime = createNumber("createdTime", Long.class);

    public final StringPath deliveryMemo = createString("deliveryMemo");

    public final ListPath<SubscribeDetail, QSubscribeDetail> details = this.<SubscribeDetail, QSubscribeDetail>createList("details", SubscribeDetail.class, QSubscribeDetail.class, PathInits.DIRECT2);

    public final NumberPath<Long> id = createNumber("id", Long.class);

    public final StringPath location = createString("location");

    public final BooleanPath orderCheck = createBoolean("orderCheck");

    public final NumberPath<Long> partnerId = createNumber("partnerId", Long.class);

    public final StringPath subscribeDate = createString("subscribeDate");

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

