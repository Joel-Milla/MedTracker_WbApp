// External libaries
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

// Define the initial state and its type
const initialSymptoms: string[] = [];
export const uiSlice = createSlice({
    name: 'ui',
    initialState: {
        initialSymptoms: initialSymptoms,
    },
    reducers: {
        setSelectedSymptoms: (state, action: PayloadAction<Set<string>>) => {
            const symptomsId = []
            for (const symptomId of action.payload) {
                symptomsId.push(symptomId);
            }
            state.initialSymptoms = symptomsId;
        },
    },
});

export const { setSelectedSymptoms } = uiSlice.actions;

export default uiSlice.reducer;