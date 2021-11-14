package com.weeklycoffee.partner.domain.partner;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.processing.Generated;
import com.querydsl.core.types.Path;


/**
 * QPartner is a Querydsl query type for Partner
 */
@Generated("com.querydsl.codegen.DefaultEntitySerializer")
public class QPartner extends EntityPathBase<Partner> {

    private static final long serialVersionUID = 1049694674L;

    public static final QPartner partner = new QPartner("partner");

    public final StringPath businessRegistrationNumber = createString("businessRegistrationNumber");

    public final StringPath ceoName = createString("ceoName");

    public final StringPath companyAddress = createString("companyAddress");

    public final StringPath companyContact = createString("companyContact");

    public final StringPath companyEmail = createString("companyEmail");

    public final StringPath companyIntroduce = createString("companyIntroduce");

    public final StringPath companyName = createString("companyName");

    public final NumberPath<Long> memberId = createNumber("memberId", Long.class);

    public final NumberPath<Long> partnerId = createNumber("partnerId", Long.class);

    public QPartner(String variable) {
        super(Partner.class, forVariable(variable));
    }

    public QPartner(Path<? extends Partner> path) {
        super(path.getType(), path.getMetadata());
    }

    public QPartner(PathMetadata metadata) {
        super(Partner.class, metadata);
    }

}

