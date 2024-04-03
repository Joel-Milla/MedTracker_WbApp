// External libaries
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

// Define the initial state that the values will have in each UI
const selectedSymptoms: string[] = [];
const selectedDataPoint: any = {
    symptomName: "",
    date: "",
    amount: "",
    note: "",
};
const selectedDataFilter: string = "30d";
export const uiSlice = createSlice({
    name: 'ui',
    initialState: {
        // Selected symptoms are the symptomst that the doctor selects on the dasboard
        selectedSymptoms: selectedSymptoms,
        selectedDataPoint: selectedDataPoint,
        selectedDataFilter: selectedDataFilter,
    },
    reducers: {
        // Receive as payload a set that contains all the keys of the selected symptoms on the list (which are the symptoms ids)
        setSelectedSymptoms: (state, action: PayloadAction<Set<string>>) => {
            const symptomsId = []
            for (const symptomId of action.payload) {
                symptomsId.push(symptomId);
            }
            state.selectedSymptoms = symptomsId;
        },
        setSelectedDataPoint: (state, action: PayloadAction<any>) => {
            const symptomName = action.payload.categoryClicked;
            const date = action.payload.date;
            const amount = action.payload[symptomName];
            const note = action.payload[`${symptomName}_note`];
            const dataPoint = {
                symptomName,
                date,
                amount,
                note,
            };
            state.selectedDataPoint = dataPoint;
        },
        setSelectedDataFilter: (state, action: PayloadAction<string>) => {
            state.selectedDataFilter = action.payload;
        },
    },
});

// Export all the actions that are generated from the reducer
export const { setSelectedSymptoms, setSelectedDataPoint, setSelectedDataFilter } = uiSlice.actions;

// Export the reducer created
export default uiSlice.reducer;