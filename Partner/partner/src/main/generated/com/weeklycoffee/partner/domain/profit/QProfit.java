package com.weeklycoffee.partner.domain.profit;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.processing.Generated;
import com.querydsl.core.types.Path;
import com.querydsl.core.types.dsl.PathInits;


/**
 * QProfit is a Querydsl query type for Profit
 */
@Generated("com.querydsl.codegen.DefaultEntitySerializer")
public class QProfit extends EntityPathBase<Profit> {

    private static final long serialVersionUID = -1734243938L;

    private static final PathInits INITS = PathInits.DIRECT2;

    public static final QProfit profit = new QProfit("profit");

    public final DateTimePath<java.util.Date> orderDate = createDateTime("orderDate", java.util.Date.class);

    public final com.weeklycoffee.partner.domain.product.QProduct product;

    public final NumberPath<Long> profitNumber = createNumber("profitNumber", Long.class);

    public final NumberPath<Integer> totalPayment = createNumber("totalPayment", Integer.class);

    public QProfit(String variable) {
        this(Profit.class, forVariable(variable), INITS);
    }

    public QProfit(Path<? extends Profit> path) {
        this(path.getType(), path.getMetadata(), PathInits.getFor(path.getMetadata(), INITS));
    }

    public QProfit(PathMetadata metadata) {
        this(metadata, PathInits.getFor(metadata, INITS));
    }

    public QProfit(PathMetadata metadata, PathInits inits) {
        this(Profit.class, metadata, inits);
    }

    public QProfit(Class<? extends Profit> type, PathMetadata metadata, PathInits inits) {
        super(type, metadata, inits);
        this.product = inits.isInitialized("product") ? new com.weeklycoffee.partner.domain.product.QProduct(forProperty("product")) : null;
    }

}

