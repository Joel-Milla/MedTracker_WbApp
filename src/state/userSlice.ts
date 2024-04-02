// External libaries
import { createSlice } from "@reduxjs/toolkit";
// Import mock data
import { mockUser } from "../Models/User";

export const userSlice = createSlice({
    name: 'user',
    initialState: mockUser,
    reducers: {
        loadData: (state) => {
            return state;
        },
    },
});

export const { loadData } = userSlice.actions;

export default userSlice.reducer;