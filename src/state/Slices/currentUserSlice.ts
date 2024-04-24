// External libaries
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const currentUser = "";
export const currentUserSlice = createSlice({
  name: "currentUser",
  initialState: {
    currentUser: currentUser,
  },
  reducers: {
    setCurrentUser: (state, action: PayloadAction<string>) => {
      state.currentUser = action.payload;
    },
  },
});

export const { setCurrentUser } = currentUserSlice.actions;

export default currentUserSlice.reducer;
