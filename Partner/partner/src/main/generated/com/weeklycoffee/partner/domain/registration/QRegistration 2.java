package com.weeklycoffee.partner.domain.registration;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.processing.Generated;
import com.querydsl.core.types.Path;


/**
 * QRegistration is a Querydsl query type for Registration
 */
@Generated("com.querydsl.codegen.DefaultEntitySerializer")
public class QRegistration extends EntityPathBase<Registration> {

    private static final long serialVersionUID = 421922878L;

    public static final QRegistration registration = new QRegistration("registration");

    public final StringPath bank = createString("bank");

    public final StringPath bankAccount = createString("bankAccount");

    public final StringPath businessRegistrationNumber = createString("businessRegistrationNumber");

    public final StringPath ceoName = createString("ceoName");

    public final StringPath companyAddress = createString("companyAddress");

    public final StringPath companyContact = createString("companyContact");

    public final StringPath companyEmail = createString("companyEmail");

    public final StringPath companyIntroduce = createString("companyIntroduce");

    public final StringPath companyName = createString("companyName");

    public final NumberPath<Long> memberId = createNumber("memberId", Long.class);

    public final StringPath registrationDate = createString("registrationDate");

    public final NumberPath<Long> registrationId = createNumber("registrationId", Long.class);

    public QRegistration(String variable) {
        super(Registration.class, forVariable(variable));
    }

    public QRegistration(Path<? extends Registration> path) {
        super(path.getType(), path.getMetadata());
    }

    public QRegistration(PathMetadata metadata) {
        super(Registration.class, metadata);
    }

}

