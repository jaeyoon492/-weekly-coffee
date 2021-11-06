import { createSlice } from "@reduxjs/toolkit";
import { ProductItem } from "./product";
import { Subscribe } from "./subscribe";

export interface Partner {
  partnerId: number;
  memberId: number;
  businessRegistrationNumber: string;
  ceoName: string;
  companyName: string;
  companyContact: string;
  companyAddress: string;
  companyIntroduce: string;
  companyEmail: string;
  products: ProductItem[] | null;
  subscribes: Subscribe[] | null;
}

const initialState: Partner = {
  partnerId: 0,
  memberId: 0,
  businessRegistrationNumber: "",
  ceoName: "",
  companyName: "",
  companyContact: "",
  companyAddress: "",
  companyIntroduce: "",
  companyEmail: "",
  products: null,
  subscribes: null,
};

export const partnerSlice = createSlice({
  name: "partner",
  initialState,
  reducers: {},
});

export const {} = partnerSlice.actions;

export default partnerSlice.reducer;
