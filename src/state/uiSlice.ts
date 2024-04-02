// External libaries
import { createSlice } from "@reduxjs/toolkit";

export const uiSlice = createSlice({
    name: 'ui',
    initialState: {
        selectedSymptomId: "189D70BE-CC59-45E7-8E41-E43CBC6CD8CD",
    },
    reducers: {
        selectSymptom: (state, action) => {
            state.selectedSymptomId = action.payload;
        },
    },
});

export const { selectSymptom } = uiSlice.actions;

export default uiSlice.reducer;