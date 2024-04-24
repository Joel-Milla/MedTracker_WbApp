// External libaries
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const currentUserEmailInitialState = "";
const currentUserNameInitialState = "";
export const currentUserSlice = createSlice({
  name: "currentUser",
  initialState: {
    currentUserEmail: currentUserEmailInitialState,
    currentUserName: currentUserNameInitialState,
  },
  reducers: {
    setCurrentUserEmail: (state, action: PayloadAction<string>) => {
      state.currentUserEmail = action.payload;
    },
    setCurrentUserName: (state, action: PayloadAction<string>) => {
      state.currentUserName = action.payload;
    },
  },
});

export const { setCurrentUserEmail, setCurrentUserName } =
  currentUserSlice.actions;

export default currentUserSlice.reducer;
