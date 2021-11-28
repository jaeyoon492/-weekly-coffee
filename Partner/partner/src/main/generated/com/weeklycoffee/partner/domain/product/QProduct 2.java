package com.weeklycoffee.partner.domain.product;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.processing.Generated;
import com.querydsl.core.types.Path;


/**
 * QProduct is a Querydsl query type for Product
 */
@Generated("com.querydsl.codegen.DefaultEntitySerializer")
public class QProduct extends EntityPathBase<Product> {

    private static final long serialVersionUID = 1722800928L;

    public static final QProduct product = new QProduct("product");

    public final StringPath beanTag = createString("beanTag");

    public final StringPath beanType = createString("beanType");

    public final StringPath companyAddress = createString("companyAddress");

    public final StringPath companyContact = createString("companyContact");

    public final StringPath companyIntroduce = createString("companyIntroduce");

    public final StringPath companyName = createString("companyName");

    public final StringPath country = createString("country");

    public final StringPath cupNote = createString("cupNote");

    public final StringPath expirationData = createString("expirationData");

    public final StringPath farm = createString("farm");

    public final StringPath fileName = createString("fileName");

    public final StringPath fileType = createString("fileType");

    public final StringPath foodType = createString("foodType");

    public final StringPath manufacturer = createString("manufacturer");

    public final StringPath manufacturingDate = createString("manufacturingDate");

    public final NumberPath<Long> partnerId = createNumber("partnerId", Long.class);

    public final StringPath processing = createString("processing");

    public final NumberPath<Long> productId = createNumber("productId", Long.class);

    public final StringPath productImageUrl = createString("productImageUrl");

    public final StringPath productInfo = createString("productInfo");

    public final StringPath productName = createString("productName");

    public final NumberPath<Integer> productPrice = createNumber("productPrice", Integer.class);

    public final NumberPath<Long> productUploadDate = createNumber("productUploadDate", Long.class);

    public final StringPath region = createString("region");

    public final StringPath roastingPoint = createString("roastingPoint");

    public final NumberPath<Integer> salesStatus = createNumber("salesStatus", Integer.class);

    public final StringPath variety = createString("variety");

    public QProduct(String variable) {
        super(Product.class, forVariable(variable));
    }

    public QProduct(Path<? extends Product> path) {
        super(path.getType(), path.getMetadata());
    }

    public QProduct(PathMetadata metadata) {
        super(Product.class, metadata);
    }

}

