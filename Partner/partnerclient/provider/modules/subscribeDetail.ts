import { createSlice } from "@reduxjs/toolkit";
import { ProductItem } from "./product";

export interface SubscribeDetail {
  SubscribeId: number;

  seq: number;

  products: ProductItem[];

  partnerId: number;
  productName: string;
  productPrice: number;
  beanAmount: number;
  term: number;
  orderQuantity: number;
  groundPoint: string;
  productImageId: string;
}

const initialState: SubscribeDetail = {
  SubscribeId: 0,
  seq: 0,
  products: [],
  partnerId: 0,
  productName: "",
  productPrice: 0,
  beanAmount: 0,
  term: 0,
  orderQuantity: 0,
  groundPoint: "",
  productImageId: "",
};

export const subscribeDetailSlice = createSlice({
  name: "subscribeDetail",
  initialState,
  reducers: {},
});

export const {} = subscribeDetailSlice.actions;

export default subscribeDetailSlice.reducer;
