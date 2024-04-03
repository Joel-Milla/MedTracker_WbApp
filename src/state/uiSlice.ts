// External libaries
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

// Define the initial state and its type
const selectedSymptoms: string[] = [];
const selectedDataPoint: any = {
    symptomName: "",
    date: "",
    amount: "",
    note: "",
};
export const uiSlice = createSlice({
    name: 'ui',
    initialState: {
        // Selected symptoms are the symptomst that the doctor selects on the dasboard
        selectedSymptoms: selectedSymptoms,
        selectedDataPoint: selectedDataPoint,
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
            console.log('note: ', note);
            const dataPoint = {
                symptomName,
                date,
                amount,
                note,
            };
            state.selectedDataPoint = dataPoint;
        },
    },
});

export const { setSelectedSymptoms, setSelectedDataPoint } = uiSlice.actions;

export default uiSlice.reducer;