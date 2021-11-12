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

export interface PartnerState {
  data: Partner;
  isFetched: boolean;
  isProductFetched: boolean;
  isAddComplete?: boolean;
}

const initialState: PartnerState = {
  data: {
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
  },
  isFetched: false,
  isProductFetched: false,
};

export const partnerSlice = createSlice({
  name: "partner",
  initialState,
  reducers: {
    fetchPartner: (state, action: PayloadAction<Partner>) => {
      const partner = action.payload;
      if (partner) {
        state.data.partnerId = partner.partnerId;
        state.data.memberId = partner.memberId;
        state.data.businessRegistrationNumber =
          partner.businessRegistrationNumber;
        state.data.ceoName = partner.ceoName;
        state.data.companyName = partner.companyName;
        state.data.companyContact = partner.companyContact;
        state.data.companyAddress = partner.companyAddress;
        state.data.companyIntroduce = partner.companyIntroduce;
        state.data.companyEmail = partner.companyEmail;
        state.data.products = partner.products;
        state.data.subscribes = partner.subscribes;
      }
      state.isAddComplete = true;
      state.isFetched = true;
    },
    initialIsComplted: (state) => {
      delete state.isAddComplete;
    },
  },
});

export const { fetchPartner } = partnerSlice.actions;

export default partnerSlice.reducer;
