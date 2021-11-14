import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { sadcat } from "../../lib/testdata";


export interface ProfileState {
  image: string | undefined;
  username: string | undefined;
}

const initialState: ProfileState = {
  image: sadcat,
  username: "JaeYoon",
};

export const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    saveProfile: (state, action: PayloadAction<ProfileState>) => {
      console.log(action);
      const profile = action.payload;
      state.image = profile.image;
      state.username = profile.username;
    },
  },
});

export const { saveProfile } = profileSlice.actions;

export default profileSlice.reducer;
