import { createSlice } from "@reduxjs/toolkit";
import { SubscribeDetail } from "./subscribeDetail";

export interface Subscribe {
  subscribeId: number;
  partnerId: number;

  subscribeDate: string;
  subscriberId: number;
  subscriberName: string;
  subscriberPhone: string;
  cardNumber: string;
  location: string;
  deliveryMemo: string;
  totalPayment: number;
  orderCheck: boolean;
  createdTime: number;

  details: SubscribeDetail[];
}

const initialState: Subscribe = {
  subscribeId: 0,
  partnerId: 0,
  subscribeDate: "",
  subscriberId: 0,
  subscriberName: "",
  subscriberPhone: "",
  cardNumber: "",
  location: "",
  deliveryMemo: "",
  totalPayment: 0,
  orderCheck: false,
  createdTime: 0,
  details: [],
};

export const subscribeSlice = createSlice({
  name: "subscribe",
  initialState,
  reducers: {},
});

export const {} = subscribeSlice.actions;

export default subscribeSlice.reducer;
