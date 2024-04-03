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
const selectedDateFilter: string = "30d";
const selectedChart: string = "line";
export const uiSlice = createSlice({
    name: 'ui',
    initialState: {
        // Selected symptoms are the symptomst that the doctor selects on the dasboard
        selectedSymptoms: selectedSymptoms,
        selectedDataPoint: selectedDataPoint,
        selectedDateFilter: selectedDateFilter,
        selectedChart: selectedChart,
    },
    reducers: {
        // Receive as payload a set that contains all the keys of the selected symptoms on the list (which are the symptoms ids)
        setSelectedSymptoms: (state, action: PayloadAction<string[]>) => {
            const symptomsId = []
            for (const symptomId of action.payload) {
                symptomsId.push(symptomId);
            }
            state.selectedSymptoms = symptomsId;
        },
        setSelectedDataPoint: (state, action: PayloadAction<any>) => {
            // Handle both cases when the user selects a point and when it is unslected
            if (action.payload == null) {
                state.selectedDataPoint = {}
            } else {
                // Save the important data into the object
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
            }
        },
        setSelectedDateFilter: (state, action: PayloadAction<string>) => {
            state.selectedDateFilter = action.payload;
        },
        setSelectedChart: (state, action: PayloadAction<string>) => {
            state.selectedChart = action.payload;
        },
    },
});

// Export all the actions that are generated from the reducer
export const { setSelectedSymptoms, setSelectedDataPoint, setSelectedDateFilter, setSelectedChart } = uiSlice.actions;

// Export the reducer created
export default uiSlice.reducer;