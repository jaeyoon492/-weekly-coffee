import { createSlice } from "@reduxjs/toolkit";
import { Partner } from "./partner";

export interface Member {
  memberId: number;
  name: string;
  partnerState: boolean;
  partner: Partner | null;
}

const initialState: Member = {
  memberId: 1,
  name: "명재윤",
  partnerState: false,
  partner: null,
};

export const memberSlice = createSlice({
  name: "member",
  initialState,
  reducers: {},
});

export const {} = memberSlice.actions;

export default memberSlice.reducer;
