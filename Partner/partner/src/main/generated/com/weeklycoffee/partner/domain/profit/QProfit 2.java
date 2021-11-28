package com.weeklycoffee.partner.domain.profit;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.processing.Generated;
import com.querydsl.core.types.Path;


/**
 * QProfit is a Querydsl query type for Profit
 */
@Generated("com.querydsl.codegen.DefaultEntitySerializer")
public class QProfit extends EntityPathBase<Profit> {

    private static final long serialVersionUID = -1734243938L;

    public static final QProfit profit = new QProfit("profit");

    public final StringPath orderDate = createString("orderDate");

    public final NumberPath<Long> partnerId = createNumber("partnerId", Long.class);

    public final NumberPath<Long> profitNumber = createNumber("profitNumber", Long.class);

    public final NumberPath<Integer> totalProfit = createNumber("totalProfit", Integer.class);

    public QProfit(String variable) {
        super(Profit.class, forVariable(variable));
    }

    public QProfit(Path<? extends Profit> path) {
        super(path.getType(), path.getMetadata());
    }

    public QProfit(PathMetadata metadata) {
        super(Profit.class, metadata);
    }

}

