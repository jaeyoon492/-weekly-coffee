import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Partner } from "./partner";

export interface Member {
  memberId: number;
  name: string;
  partnerState: boolean;
  partner: Partner;
}

export interface MemberState {
  data: Member;
  isFetched: boolean;
}

const initialState: MemberState = {
  data: {
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
  },
  isFetched: false,
};

const memberSlice = createSlice({
  name: "member",
  initialState,
  reducers: {
    fetchMember: (state, action: PayloadAction<Member>) => {
      const member = action.payload;
      if (member) {
        state.data.memberId = member.memberId;
        state.data.name = member.name;
        state.data.partner = member.partner;
        state.data.partnerState = member.partnerState;
      }
      state.isFetched = true;
    },
  },
});

export const { fetchMember } = memberSlice.actions;

export default memberSlice.reducer;
