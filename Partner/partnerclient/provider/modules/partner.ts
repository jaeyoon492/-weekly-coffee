import { createSlice, PayloadAction } from "@reduxjs/toolkit";
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
  products: ProductItem[];
  subscribes: Subscribe[];
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
  products: [],
  subscribes: [],
};

export const partnerSlice = createSlice({
  name: "partner",
  initialState,
  reducers: {
    fetchPartner: (state, action: PayloadAction<Partner>) => {
      const partner = action.payload;

      if (partner) {
        state.partnerId = partner.partnerId;
        state.memberId = partner.memberId;
        state.businessRegistrationNumber = partner.businessRegistrationNumber;
        state.ceoName = partner.ceoName;
        state.companyName = partner.companyName;
        state.companyContact = partner.companyContact;
        state.companyAddress = partner.companyAddress;
        state.companyIntroduce = partner.companyIntroduce;
        state.companyEmail = partner.companyEmail;
        state.products = partner.products;
        state.subscribes = partner.subscribes;
      }
    },
  },
});

export const { fetchPartner } = partnerSlice.actions;

export default partnerSlice.reducer;
