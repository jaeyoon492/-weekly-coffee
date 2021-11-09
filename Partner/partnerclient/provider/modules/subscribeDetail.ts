import { createSlice } from "@reduxjs/toolkit";
import { ProductItem } from "./product";

export interface SubscribeDetail {
  subscribeId: number;

  seq: number;

  product: ProductItem[];

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
  subscribeId: 0,
  seq: 0,
  product: [],
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
