import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { SubscribeDetail } from "./subscribeDetail";

export interface Subscribe {
  subscribeId: number;
  partnerId: number;

  subscribeDate: string;
  subscriberId: number;
  subscriberName: string;
  subscriberPhone: string;
  location: string;
  deliveryMemo: string;
  totalPayment: number;
  orderCheck: boolean;
  createdTime: number;

  details: SubscribeDetail[];
}

export interface SubScribePage {
  data: Subscribe[];
  totalElements: number;
  totalPages: number;
  page: number;
  pageSize: number;
  isLast: boolean;
}

export interface SubscribePageResponse {
  content: SubscribeResponse[];
  totalElements: number;
  totalPages: number;
  page: number;
  pageSize: number;
  isLast: boolean;
}

export interface SubscribeResponse {
  subscribeId: number;
  partnerId: number;

  subscribeDate: string;
  subscriberId: number;
  subscriberName: string;
  subscriberPhone: string;
  location: string;
  deliveryMemo: string;
  totalPayment: number;
  orderCheck: boolean;
  createdTime: number;

  details: SubscribeDetail[];
}

export interface SubscribeState {
  data: Subscribe[];
  isFetched: boolean;
  totalElements?: number;
  totalPages: number;
  page: number;
  pageSize: number;
  isLast?: boolean;
}

const initialState: SubscribeState = {
  data: [],
  isFetched: false,
  totalPages: 0,
  page: 0,
  pageSize: 1,
};

export const subscribeSlice = createSlice({
  name: "subscribe",
  initialState,
  reducers: {
    initialNextSubscribe: (state, action: PayloadAction<SubScribePage>) => {
      state.data = action.payload.data;

      state.totalElements = action.payload.totalElements;
      state.totalPages = action.payload.totalPages;
      state.page = action.payload.page;
      state.pageSize = action.payload.pageSize;
      state.isLast = action.payload.isLast;

      state.isFetched = true;
    },
  },
});

export const { initialNextSubscribe } = subscribeSlice.actions;

export default subscribeSlice.reducer;
