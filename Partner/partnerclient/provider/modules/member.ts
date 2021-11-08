import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Partner } from "./partner";

export interface Member {
  memberId: number;
  name: string;
  partnerState: boolean;
  partner: Partner;
}

const initialState: Member = {
  memberId: 0,
  name: "",
  partnerState: false,
  partner: {
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
};

const memberSlice = createSlice({
  name: "member",
  initialState,
  reducers: {
    fetchMember: (state, action: PayloadAction<Member>) => {
      const member = action.payload;
      if (member) {
        state.memberId = member.memberId;
        state.name = member.name;
        state.partner = member.partner;
        state.partnerState = member.partnerState;
      }
    },
  },
});

export const { fetchMember } = memberSlice.actions;

export default memberSlice.reducer;
