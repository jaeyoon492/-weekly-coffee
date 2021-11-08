import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface ProductItem {
  productId: number;
  partnerId: number;
  productName: string;
  productPrice: number;
  productImageUrl: string;
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
}

const initialState: ProductItem[] = [
  {
    productId: 0,
    partnerId: 0,
    productName: "",
    productPrice: 0,
    productImageUrl: "",
    foodType: "",
    expirationData: "",
    manufacturer: "",
    manufacturingDate: "",
    companyName: "",
    companyIntroduce: "",
    companyAddress: "",
    companyContact: "",
    beanType: "",
    beanTag: "",
    processing: "",
    country: "",
    region: "",
    farm: "",
    cupNote: "",
    roastingPoint: "",
    variety: "",
  },
];

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<ProductItem>) => {
      const productItem = action.payload;
      state.unshift(productItem);
    },
  },
});

export const { addProduct } = productSlice.actions;

export default productSlice.reducer;
