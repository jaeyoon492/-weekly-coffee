import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface RegistrationItem {
  registrationId?: number;
  memberId: number;
  companyName: string;
  businessRegistrationNumber: string;
  ceoName: string;
  companyIntroduce: string;
  companyAddress: string;
  companyContact: string;
  companyEmail: string;
  bank: string;
  bankAccount: string;
  registrationDate: string;
}

export interface RegistrationState {
  data: RegistrationItem;
  isAddComplete?: boolean;
}

const initialState: RegistrationState = {
  data: {
    memberId: 0,
    companyName: "",
    businessRegistrationNumber: "",
    ceoName: "",
    companyIntroduce: "",
    companyAddress: "",
    companyContact: "",
    companyEmail: "",
    bank: "",
    bankAccount: "",
    registrationDate: "",
  },
  isAddComplete: false,
};

export const registrationSlice = createSlice({
  name: "registration",
  initialState,
  reducers: {
    addRegistration: (state, action: PayloadAction<RegistrationItem>) => {
      const registration = action.payload;

      if (registration) {
        state.data.registrationId = registration.registrationId;
        state.data.memberId = registration.memberId;
        state.data.businessRegistrationNumber =
          registration.businessRegistrationNumber;
        state.data.companyName = registration.companyName;
        state.data.ceoName = registration.ceoName;
        state.data.companyIntroduce = registration.companyIntroduce;
        state.data.companyAddress = registration.companyAddress;
        state.data.companyContact = registration.companyContact;
        state.data.companyEmail = registration.companyEmail;
        state.data.bank = registration.bank;
        state.data.bankAccount = registration.bankAccount;
        state.data.registrationDate = registration.registrationDate;
      }
      state.isAddComplete = true;
    },
    initialIsComplted: (state) => {
      delete state.isAddComplete;
    },
  },
});

export const { addRegistration, initialIsComplted } = registrationSlice.actions;

export default registrationSlice.reducer;
