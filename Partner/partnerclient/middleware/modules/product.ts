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
  initialIsComplted,
  initialPagedProduct,
  initialSalesState,
  modifyProduct,
  ProductItem,
  ProductPage,
  ProductPagingResponse,
  ProductRequest,
  ProductResponse,
  removeProduct,
  SalesStatus,
  semiModify,
  SemiModify,
} from "../../provider/modules/product";
import { endProgress, startProgress } from "../../provider/modules/progress";
import { requestFetchMember } from "./member";

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

export const requestModifyProduct = createAction<ProductItem>(
  `${productReducer.name}/requestModifyProduct`
);

export const requestDeleteProduct = createAction<number>(
  `${productReducer.name}/requestDeleteProduct`
);

export const requestProductSalesChange = createAction<number>(
  `${productReducer.name}/requestProductSalesOn`
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
      productInfo: payloadData.productInfo,
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

    console.log(productItem);

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
      productInfo: responseData.productInfo,
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

    yield put(initialIsComplted());

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
            productInfo: item.productInfo,
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
      isLast: result.data.isLast,
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
    productInfo: product.productInfo,
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
    salesStatus: product.salesStatus,
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
    productInfo: responseData.productInfo,
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

  yield put(semiModify(data));
}

function* deleteProductData(action: PayloadAction<number>) {
  yield console.log("--removeData--");

  const id = action.payload;

  yield put(startProgress());

  const productItem: ProductItem = yield select((state: RootState) =>
    state.product.data.find((item) => item.productId === id)
  );

  const urlArr = productItem.productImageUrl.split("/");
  const objectKey = urlArr[urlArr.length - 1];

  yield call(fileApi.remove, objectKey);

  const result: AxiosResponse<boolean> = yield call(productApi.remove, id);

  yield put(endProgress());

  if (result.data) {
    yield put(removeProduct(id));
    yield put(initialIsComplted());
  } else {
    yield put(
      addAlert({
        id: nanoid(),
        variant: "danger",
        message: "오류로 저장되지 않았습니다.",
      })
    );
  }
}

function* modifyProductSalesState(action: PayloadAction<number>) {
  yield console.log("--Product Sales On --");

  const productId = action.payload;

  try {
    yield put(startProgress());
    const result: AxiosResponse<number> = yield call(
      productApi.salesChange,
      productId
    );
    yield put(endProgress());

    const status = result.data;
    console.log(status);

    const data: SalesStatus = {
      productId,
      status,
    };

    yield put(initialSalesState(data));
  } catch (e: any) {
    yield put(endProgress());

    yield put(
      addAlert({ id: nanoid(), variant: "danger", message: e.message })
    );
  }
}

function* modifyProductDataNext(action: PayloadAction<ProductItem>) {
  yield console.log("-- 제품 상세 수정 --");

  const productItem = action.payload;

  yield put(startProgress());

  let fileUrl = action.payload.productImageUrl;
  if (productItem.productImageUrl.startsWith("data")) {
    const productItemFile: ProductItem = yield select((state: RootState) =>
      state.product.data.find(
        (item) => item.productId === productItem.productId
      )
    );

    const urlArr = productItemFile.productImageUrl.split("/");
    const objectKey = urlArr[urlArr.length - 1];

    yield call(fileApi.remove, objectKey);

    const file: File = yield call(
      dataUrlToFile,
      productItem.productImageUrl,
      productItem.fileName,
      productItem.fileType
    );

    const formFile = new FormData();
    formFile.set("file", file);

    const fileResult: AxiosResponse<string> = yield call(
      fileApi.upload,
      formFile
    );
    fileUrl = fileResult.data;
  }

  const productRequestItem: ProductRequest = {
    productId: productItem.productId,
    partnerId: productItem.partnerId,
    productName: productItem.productName,
    productPrice: productItem.productPrice,
    productImageUrl: fileUrl,
    productInfo: productItem.productInfo,
    fileName: productItem.fileName,
    fileType: productItem.fileType,
    foodType: productItem.foodType,
    expirationData: productItem.expirationData,
    manufacturer: productItem.manufacturer,
    manufacturingDate: productItem.manufacturingDate,
    companyName: productItem.companyName,
    productUploadDate: new Date().getDate(),
    companyIntroduce: productItem.companyIntroduce,
    companyAddress: productItem.companyAddress,
    companyContact: productItem.companyContact,
    beanType: productItem.beanType,
    beanTag: productItem.beanTag,
    processing: productItem.processing,
    country: productItem.country,
    region: productItem.region,
    farm: productItem.farm,
    cupNote: productItem.cupNote,
    roastingPoint: productItem.roastingPoint,
    variety: productItem.variety,
    salesStatus: productItem.salesStatus,
  };

  const result: AxiosResponse<ProductResponse> = yield call(
    productApi.modifyItem,
    productItem.productId,
    productRequestItem
  );
  yield put(endProgress());
  const responseData = result.data;

  const data: ProductItem = {
    productId: responseData.productId,
    partnerId: responseData.partnerId,
    productName: responseData.productName,
    productPrice: responseData.productPrice,
    productImageUrl: responseData.productImageUrl,
    productInfo: responseData.productInfo,
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
    isEdit: productItem.isEdit,
  };
  yield put(modifyProduct(data));
  yield put(initialIsComplted());
}

export default function* productSaga() {
  yield takeEvery(requestAddProduct, addDataNext);
  yield takeLatest(requestFetchProductsPaging, fetchProductPaging);
  yield takeLatest(requestSemiModify, modifyProductData);
  yield takeLatest(requestDeleteProduct, deleteProductData);
  yield takeEvery(requestProductSalesChange, modifyProductSalesState);
  yield takeLatest(requestModifyProduct, modifyProductDataNext);
}
