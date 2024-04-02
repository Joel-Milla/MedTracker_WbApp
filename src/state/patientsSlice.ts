// External libaries
import { createSlice } from "@reduxjs/toolkit";
// Import mock data
import { mockData } from "../Models/Patients";

export const patientsSlice = createSlice({
    name: 'patients',
    initialState: mockData,
    reducers: {
        loadData: (state) => {
            return state;
        },
    },
});

export const { loadData } = patientsSlice.actions;

export default patientsSlice.reducer;