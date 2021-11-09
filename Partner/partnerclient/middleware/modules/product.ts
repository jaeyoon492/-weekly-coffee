import {
  call,
  put,
  select,
  takeEvery,
  takeLatest,
} from "@redux-saga/core/effects";
import { createAction, nanoid, PayloadAction } from "@reduxjs/toolkit";
import { AxiosResponse } from "axios";
import fileApi from "../../api/file";
import productApi from "../../api/product";
import { dataUrlToFile } from "../../lib/string";
import { RootState } from "../../provider";
import { addAlert } from "../../provider/modules/alert";
import productReducer, {
  addProduct,
  initialPagedProduct,
  ProductItem,
  ProductPage,
  ProductPagingResponse,
  ProductRequest,
  ProductResponse,
  semiModify,
  SemiModify,
} from "../../provider/modules/product";
import { endProgress, startProgress } from "../../provider/modules/progress";

export interface ProductPageRequest {
  partnerId: number;
  page: number;
  size: number;
}

export const requestAddProduct = createAction<ProductItem>(
  `${productReducer.name}/requestAddProduct`
);

export const requestFetchProductsPaging = createAction<ProductPageRequest>(
  `${productReducer.name}/requestFetchProductsPaging`
);

export const requestSemiModify = createAction<SemiModify>(
  `${productReducer.name}/requestSemiModify`
);

function* addDataNext(action: PayloadAction<ProductItem>) {
  yield console.log("-- addProduct --");
  yield console.log(action.payload);

  try {
    const payloadData = action.payload;
    const photoItem = payloadData.productImageUrl;
    const fileName = payloadData.fileName;
    const fileType = payloadData.fileType;

    //   yield put(startProgress());

    const file: File = yield call(dataUrlToFile, photoItem, fileName, fileType);

    const formFile = new FormData();
    formFile.set("file", file);

    const fileUrl: AxiosResponse<string> = yield call(fileApi.upload, formFile);

    const productItem: ProductRequest = {
      productId: payloadData.productId,
      partnerId: payloadData.partnerId,
      productName: payloadData.productName,
      productPrice: payloadData.productPrice,
      productImageUrl: fileUrl.data,
      fileName: payloadData.fileName,
      fileType: payloadData.fileType,
      foodType: payloadData.foodType,
      expirationData: payloadData.expirationData,
      manufacturer: payloadData.manufacturer,
      manufacturingDate: payloadData.manufacturingDate,
      companyName: payloadData.companyName,
      productUploadDate: new Date().getDate(),
      companyIntroduce: payloadData.companyIntroduce,
      companyAddress: payloadData.companyAddress,
      companyContact: payloadData.companyContact,
      beanType: payloadData.beanType,
      beanTag: payloadData.beanTag,
      processing: payloadData.processing,
      country: payloadData.country,
      region: payloadData.region,
      farm: payloadData.farm,
      cupNote: payloadData.cupNote,
      roastingPoint: payloadData.roastingPoint,
      variety: payloadData.variety,
      salesStatus: 0,
    };

    const result: AxiosResponse<ProductResponse> = yield call(
      productApi.add,
      productItem
    );

    // yield put(endProgress());
    const responseData = result.data;

    const data: ProductItem = {
      productId: responseData.productId,
      partnerId: responseData.partnerId,
      productName: responseData.productName,
      productPrice: responseData.productPrice,
      productImageUrl: responseData.productImageUrl,
      fileName: responseData.fileName,
      fileType: responseData.fileType,
      foodType: responseData.foodType,
      expirationData: responseData.expirationData,
      manufacturer: responseData.manufacturer,
      manufacturingDate: responseData.manufacturingDate,
      companyName: responseData.companyName,
      companyIntroduce: responseData.companyIntroduce,
      companyAddress: responseData.companyAddress,
      companyContact: responseData.companyContact,
      beanType: responseData.beanType,
      beanTag: responseData.beanTag,
      processing: responseData.processing,
      country: responseData.country,
      region: responseData.region,
      farm: responseData.farm,
      cupNote: responseData.cupNote,
      roastingPoint: responseData.roastingPoint,
      variety: responseData.variety,
      productUploadDate: responseData.productUploadDate,
      salesStatus: responseData.salesStatus,
    };

    yield put(addProduct(data));

    yield put(
      addAlert({ id: nanoid(), variant: "success", message: "저장되었습니다." })
    );
  } catch (e: any) {
    yield put(endProgress());
    // alert박스를 추가해줌
    yield put(
      addAlert({ id: nanoid(), variant: "danger", message: e.message })
    );
  }
}

function* fetchProductPaging(action: PayloadAction<ProductPageRequest>) {
  yield console.log("- 파트너 품목 조회 페이징 -");
  yield console.log(action.payload.page);
  yield console.log(action.payload.size);
  yield console.log(action.payload.partnerId);

  const partnerId = action.payload.partnerId;
  const page = action.payload.page;
  const size = action.payload.size;

  localStorage.setItem("product_page_size", size.toString());

  yield put(startProgress());

  try {
    const result: AxiosResponse<ProductPagingResponse> = yield call(
      productApi.fetch,
      partnerId,
      page,
      size
    );

    console.log(result.data.content);
    yield put(endProgress());

    const productPage: ProductPage = {
      data: result.data.content.map(
        (item) =>
          ({
            productId: item.productId,
            partnerId: item.partnerId,
            productName: item.productName,
            productPrice: item.productPrice,
            productImageUrl: item.productImageUrl,
            fileName: item.fileName,
            fileType: item.fileType,
            foodType: item.foodType,
            expirationData: item.expirationData,
            manufacturer: item.manufacturer,
            manufacturingDate: item.manufacturingDate,
            companyName: item.companyName,
            companyIntroduce: item.companyIntroduce,
            companyAddress: item.companyAddress,
            companyContact: item.companyContact,
            beanType: item.beanType,
            beanTag: item.beanTag,
            processing: item.processing,
            country: item.country,
            region: item.region,
            farm: item.farm,
            cupNote: item.cupNote,
            roastingPoint: item.roastingPoint,
            variety: item.variety,
            productUploadDate: item.productUploadDate,
            salesStatus: item.salesStatus,
            isEdit: false,
          } as ProductItem)
      ),
      totalElements: result.data.totalElements,
      totalPages: result.data.totalPages,
      page: result.data.number,
      pageSize: result.data.size,
      isLast: result.data.last,
    };

    yield put(initialPagedProduct(productPage));
  } catch (e: any) {
    // 에러발생
    // spinner 사라지게 하기
    yield put(endProgress());
    // alert박스를 추가해줌
    yield put(
      addAlert({ id: nanoid(), variant: "danger", message: e.message })
    );
  }
}

function* modifyProductData(action: PayloadAction<SemiModify>) {
  yield console.log("-- semiModyfy --");

  const payloadItem = action.payload;

  const product: ProductItem = yield select((state: RootState) =>
    state.product.data.find((item) => item.productId === payloadItem.productId)
  );

  const productItem: ProductRequest = {
    productId: product.productId,
    partnerId: product.partnerId,
    productName: payloadItem.productName,
    productPrice: payloadItem.productPrice,
    productImageUrl: product.productImageUrl,
    fileName: product.fileName,
    fileType: product.fileType,
    foodType: product.foodType,
    expirationData: product.expirationData,
    manufacturer: product.manufacturer,
    manufacturingDate: product.manufacturingDate,
    companyName: product.companyName,
    productUploadDate: new Date().getDate(),
    companyIntroduce: product.companyIntroduce,
    companyAddress: product.companyAddress,
    companyContact: product.companyContact,
    beanType: product.beanType,
    beanTag: product.beanTag,
    processing: product.processing,
    country: product.country,
    region: product.region,
    farm: product.farm,
    cupNote: product.cupNote,
    roastingPoint: product.roastingPoint,
    variety: product.variety,
    salesStatus: 0,
  };

  yield put(startProgress());

  const result: AxiosResponse<ProductResponse> = yield call(
    productApi.modify,
    productItem
  );

  yield put(endProgress());

  const responseData = result.data;

  const data: ProductItem = {
    productId: responseData.productId,
    partnerId: responseData.partnerId,
    productName: responseData.productName,
    productPrice: responseData.productPrice,
    productImageUrl: responseData.productImageUrl,
    fileName: responseData.fileName,
    fileType: responseData.fileType,
    foodType: responseData.foodType,
    expirationData: responseData.expirationData,
    manufacturer: responseData.manufacturer,
    manufacturingDate: responseData.manufacturingDate,
    companyName: responseData.companyName,
    companyIntroduce: responseData.companyIntroduce,
    companyAddress: responseData.companyAddress,
    companyContact: responseData.companyContact,
    beanType: responseData.beanType,
    beanTag: responseData.beanTag,
    processing: responseData.processing,
    country: responseData.country,
    region: responseData.region,
    farm: responseData.farm,
    cupNote: responseData.cupNote,
    roastingPoint: responseData.roastingPoint,
    variety: responseData.variety,
    productUploadDate: responseData.productUploadDate,
    salesStatus: responseData.salesStatus,
    isEdit: true,
  };

  put(semiModify(data));
}

export default function* productSaga() {
  yield takeEvery(requestAddProduct, addDataNext);
  yield takeEvery(requestFetchProductsPaging, fetchProductPaging);
  yield takeEvery(requestSemiModify, modifyProductData);
}
