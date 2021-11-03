package com.weeklycoffee.partner.registrationform;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.processing.Generated;
import com.querydsl.core.types.Path;
import com.querydsl.core.types.dsl.PathInits;


/**
 * QRegistrationForm is a Querydsl query type for RegistrationForm
 */
@Generated("com.querydsl.codegen.DefaultEntitySerializer")
public class QRegistrationForm extends EntityPathBase<RegistrationForm> {

    private static final long serialVersionUID = -11634604L;

    private static final PathInits INITS = PathInits.DIRECT2;

    public static final QRegistrationForm registrationForm = new QRegistrationForm("registrationForm");

    public final StringPath bank = createString("bank");

    public final StringPath bankAccount = createString("bankAccount");

    public final StringPath businessRegistrationNumber = createString("businessRegistrationNumber");

    public final StringPath ceoName = createString("ceoName");

    public final StringPath companyAddress = createString("companyAddress");

    public final StringPath companyContact = createString("companyContact");

    public final StringPath companyEmail = createString("companyEmail");

    public final StringPath companyIntroduce = createString("companyIntroduce");

    public final NumberPath<Long> id = createNumber("id", Long.class);

    public final com.weeklycoffee.partner.member.QMember member;

    public final StringPath registrationDate = createString("registrationDate");

    public QRegistrationForm(String variable) {
        this(RegistrationForm.class, forVariable(variable), INITS);
    }

    public QRegistrationForm(Path<? extends RegistrationForm> path) {
        this(path.getType(), path.getMetadata(), PathInits.getFor(path.getMetadata(), INITS));
    }

    public QRegistrationForm(PathMetadata metadata) {
        this(metadata, PathInits.getFor(metadata, INITS));
    }

    public QRegistrationForm(PathMetadata metadata, PathInits inits) {
        this(RegistrationForm.class, metadata, inits);
    }

    public QRegistrationForm(Class<? extends RegistrationForm> type, PathMetadata metadata, PathInits inits) {
        super(type, metadata, inits);
        this.member = inits.isInitialized("member") ? new com.weeklycoffee.partner.member.QMember(forProperty("member"), inits.get("member")) : null;
    }

}

