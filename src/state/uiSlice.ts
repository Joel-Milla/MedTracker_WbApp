// External libaries
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

// Define the initial state that the values will have in each UI
const selectedUser: string = "joel@mail.com"
const selectedSymptoms: string[] = [];
const selectedDataPoint: any = {
    symptomName: "",
    date: "",
    amount: "",
    note: "",
};
const selectedDateFilter: string = "30d";
const selectedChart: string = "line";
const searchText: string ="";
const patientSearchText: string = "";
export const uiSlice = createSlice({
    name: 'ui',
    initialState: {
        // Selection of data that the user makes
        selectedUser: selectedUser,
        selectedSymptoms: selectedSymptoms,
        selectedDataPoint: selectedDataPoint,
        selectedDateFilter: selectedDateFilter,
        selectedChart: selectedChart,
        searchText: searchText,
        patientSearchText: patientSearchText,
    },
    reducers: {
        setSelectedUser: (state, action: PayloadAction<string>) => {
            state.selectedUser = action.payload;
        },
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
        setSearchText: (state, action: PayloadAction<string>) => {
            // Convert to lowercase to avoid problems of casing
            state.searchText = action.payload.toLocaleLowerCase();
        },
        setPatientSearchText: (state, action: PayloadAction<string>) => {
            // Convert to lowercase to avoid problems of casing
            state.patientSearchText = action.payload.toLocaleLowerCase();
        },
    },
});

// Export all the actions that are generated from the reducer
export const { setSelectedUser, setSelectedSymptoms, setSelectedDataPoint, setSelectedDateFilter, setSelectedChart, setSearchText, setPatientSearchText } = uiSlice.actions;

// Export the reducer created
export default uiSlice.reducer;