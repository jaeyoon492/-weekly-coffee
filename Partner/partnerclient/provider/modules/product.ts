import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface ProductItem {
  productId: number;
  partnerId: number;
  productName: string;
  productPrice: number;
  productImageUrl: string;
  productInfo: string;
  fileName: string;
  fileType: string;
  foodType: string;
  expirationData: string;
  manufacturer: string;
  manufacturingDate: string;
  companyName: string;
  companyIntroduce: string;
  companyAddress: string;
  companyContact: string;
  beanType: string;
  beanTag: string;
  processing: string;
  country: string;
  region: string;
  farm: string;
  cupNote: string;
  roastingPoint: string;
  variety: string;
  productUploadDate?: number;
  salesStatus: number;
  isEdit?: boolean;
}

export interface ProductPage {
  data: ProductItem[];
  totalElements: number;
  totalPages: number;
  page: number;
  pageSize: number;
  isLast: boolean;
}

export interface ProductCachePageResponse {
  content: ProductItem[];
  isLast: boolean;
  totalElements: number;
}

export interface ProductPagingResponse {
  content: ProductResponse[];
  isLast: boolean;
  totalElements: number;
  totalPages: number;
  size: number;
  number: number;
}

export interface ProductResponse {
  productId: number;
  partnerId: number;
  productName: string;
  productPrice: number;
  productImageUrl: string;
  productInfo: string;
  fileName: string;
  fileType: string;
  foodType: string;
  expirationData: string;
  manufacturer: string;
  manufacturingDate: string;
  companyName: string;
  productUploadDate: number;
  companyIntroduce: string;
  companyAddress: string;
  companyContact: string;
  beanType: string;
  beanTag: string;
  processing: string;
  country: string;
  region: string;
  farm: string;
  cupNote: string;
  roastingPoint: string;
  variety: string;
  salesStatus: number;
}

export interface ProductRequest {
  productId: number;
  partnerId: number;
  productName: string;
  productPrice: number;
  productImageUrl: string;
  productInfo: string;
  fileName: string;
  fileType: string;
  foodType: string;
  expirationData: string;
  manufacturer: string;
  manufacturingDate: string;
  companyName: string;
  productUploadDate: number;
  companyIntroduce: string;
  companyAddress: string;
  companyContact: string;
  beanType: string;
  beanTag: string;
  processing: string;
  country: string;
  region: string;
  farm: string;
  cupNote: string;
  roastingPoint: string;
  variety: string;
  salesStatus: number;
}

export interface ProductState {
  data: ProductItem[];
  chche?: ProductItem[];
  isFetched: boolean;
  isChcheFetch?: boolean;
  isAddCompleted?: boolean;
  isRemoveCompleted?: boolean;
  isModifyCompleted?: boolean;
  totalElements?: number;
  totalPages: number;
  page: number;
  pageSize: number;
  isLast?: boolean;
}

export interface SemiModify {
  productId: number;
  productName: string;
  productPrice: number;
}

export interface SalesStatus {
  productId: number;
  status: number;
}

const initialState: ProductState = {
  data: [],
  chche: [],
  isFetched: false,
  page: 0,
  pageSize: 10,
  totalPages: 0,
  isChcheFetch: false,
  isAddCompleted: false,
  isRemoveCompleted: false,
  isModifyCompleted: false,
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<ProductItem>) => {
      const productItem = action.payload;
      state.data.unshift(productItem);
      state.isAddCompleted = true;
    },
    initialPagedProduct: (state, action: PayloadAction<ProductPage>) => {
      state.data = action.payload.data;

      state.totalElements = action.payload.totalElements;
      state.totalPages = action.payload.totalPages;
      state.page = action.payload.page;
      state.pageSize = action.payload.pageSize;
      state.isLast = action.payload.isLast;

      state.isFetched = true;
    },
    initialCacheProduct: (state, action: PayloadAction<ProductPage>) => {
      if (state.chche) {
        state.chche = action.payload.data;
        state.isChcheFetch = true;
      }
    },

    editProduct: (state, action: PayloadAction<number>) => {
      const data = state.data.find((item) => item.productId === action.payload);
      if (data) {
        data.isEdit = true;
      }
    },
    semiModify: (state, action: PayloadAction<ProductItem>) => {
      const productItem = action.payload;
      const data = state.data.find(
        (item) => item.productId === productItem.productId
      );
      if (data) {
        data.productName = productItem.productName;
        data.productPrice = productItem.productPrice;
        data.isEdit = false;
      }
    },

    modifyProduct: (state, action: PayloadAction<ProductItem>) => {
      const productItem = action.payload;
      const data = state.data.find(
        (item) => item.productId === productItem.productId
      );

      if (data) {
        data.productId = productItem.productId;
        data.partnerId = productItem.partnerId;
        data.productName = productItem.productName;
        data.processing = productItem.processing;
        data.productPrice = productItem.productPrice;
        data.productImageUrl = productItem.productImageUrl;
        data.productInfo = productItem.productInfo;
        data.fileName = productItem.fileName;
        data.fileType = productItem.fileType;
        data.foodType = productItem.foodType;
        data.expirationData = productItem.expirationData;
        data.manufacturer = productItem.manufacturer;
        data.manufacturingDate = productItem.manufacturingDate;
        data.companyIntroduce = productItem.companyIntroduce;
        data.companyAddress = productItem.companyAddress;
        data.companyName = productItem.companyName;
        data.companyContact = productItem.companyContact;
        data.beanType = productItem.beanType;
        data.beanTag = productItem.beanTag;
        data.country = productItem.country;
        data.region = productItem.region;
        data.farm = productItem.farm;
        data.cupNote = productItem.cupNote;
        data.roastingPoint = productItem.roastingPoint;
        data.variety = productItem.variety;
        data.productUploadDate = productItem.productUploadDate;
        data.salesStatus = productItem.salesStatus;
        data.isEdit = productItem.isEdit;
      }
      state.isModifyCompleted = true;
    },

    removeProduct: (state, action: PayloadAction<number>) => {
      const id = action.payload;

      state.data.splice(
        state.data.findIndex((item) => item.productId === id),
        1
      );
      state.isRemoveCompleted = true;
    },
    initialIsComplted: (state) => {
      delete state.isAddCompleted;
      delete state.isRemoveCompleted;
      delete state.isModifyCompleted;
    },
    initialSalesState: (state, action: PayloadAction<SalesStatus>) => {
      const productId = action.payload.productId;
      const status = action.payload.status;
      console.log(productId);
      console.log(status);

      const data = state.data.find((item) => item.productId === productId);
      if (data) {
        data.salesStatus = status;
      }
    },
  },
});

export const {
  addProduct,
  initialPagedProduct,
  editProduct,
  semiModify,
  removeProduct,
  initialIsComplted,
  initialSalesState,
  modifyProduct,
  initialCacheProduct,
} = productSlice.actions;

export default productSlice.reducer;
