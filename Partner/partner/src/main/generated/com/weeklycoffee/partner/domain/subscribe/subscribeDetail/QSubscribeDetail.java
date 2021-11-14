package com.weeklycoffee.partner.domain.subscribe.subscribeDetail;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.processing.Generated;
import com.querydsl.core.types.Path;
import com.querydsl.core.types.dsl.PathInits;


/**
 * QSubscribeDetail is a Querydsl query type for SubscribeDetail
 */
@Generated("com.querydsl.codegen.DefaultEntitySerializer")
public class QSubscribeDetail extends EntityPathBase<SubscribeDetail> {

    private static final long serialVersionUID = 535832596L;

    private static final PathInits INITS = PathInits.DIRECT2;

    public static final QSubscribeDetail subscribeDetail = new QSubscribeDetail("subscribeDetail");

    public final NumberPath<Integer> beanAmount = createNumber("beanAmount", Integer.class);

    public final StringPath groundPoint = createString("groundPoint");

    public final NumberPath<Integer> orderQuantity = createNumber("orderQuantity", Integer.class);

    public final NumberPath<Long> partnerId = createNumber("partnerId", Long.class);

    public final com.weeklycoffee.partner.domain.product.QProduct product;

    public final StringPath productImageUrl = createString("productImageUrl");

    public final StringPath productName = createString("productName");

    public final NumberPath<Integer> productPrice = createNumber("productPrice", Integer.class);

    public final NumberPath<Integer> seq = createNumber("seq", Integer.class);

    public final NumberPath<Long> subscribeId = createNumber("subscribeId", Long.class);

    public final NumberPath<Integer> term = createNumber("term", Integer.class);

    public QSubscribeDetail(String variable) {
        this(SubscribeDetail.class, forVariable(variable), INITS);
    }

    public QSubscribeDetail(Path<? extends SubscribeDetail> path) {
        this(path.getType(), path.getMetadata(), PathInits.getFor(path.getMetadata(), INITS));
    }

    public QSubscribeDetail(PathMetadata metadata) {
        this(metadata, PathInits.getFor(metadata, INITS));
    }

    public QSubscribeDetail(PathMetadata metadata, PathInits inits) {
        this(SubscribeDetail.class, metadata, inits);
    }

    public QSubscribeDetail(Class<? extends SubscribeDetail> type, PathMetadata metadata, PathInits inits) {
        super(type, metadata, inits);
        this.product = inits.isInitialized("product") ? new com.weeklycoffee.partner.domain.product.QProduct(forProperty("product")) : null;
    }

}

