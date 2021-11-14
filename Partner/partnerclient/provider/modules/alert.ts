import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AlertItem {
  id: string;
  variant: "success" | "danger" | "info" | "warning";
  message: string;
}

const initialState: AlertItem[] = [];

const alertSlice = createSlice({
  name: "alert",
  initialState,
  reducers: {
    addAlert: (state, action: PayloadAction<AlertItem>) => {
      const alertItem = action.payload;
      state.unshift(alertItem); // 추가할 얼럿을 앞쪽에
    },
    removeAlert: (state, action: PayloadAction<string>) => {
      const id = action.payload;
      state.splice(
        state.findIndex((item) => item.id === id),
        1
      );
    },
  },
});

export const { addAlert, removeAlert } = alertSlice.actions;

export default alertSlice.reducer;
