// External libraries
import { configureStore } from "@reduxjs/toolkit"; // To create the store of redux
import patientsReducer from "./Slices/patientsSlice";
import userReducer from "./Slices/userSlice";
import uiReducer from "./Slices/uiSlice";
import doctorReducer from "./Slices/doctorSlice";

export const store = configureStore({
    reducer: {
        patients: patientsReducer,
        user: userReducer,
        ui: uiReducer,
        doctor: doctorReducer,
    },
});

// Get the type of state store so it can be access easily through the app
export type RootState = ReturnType<typeof store.getState>;

// Get the type of the function dispatch to export it and use it
export type AppDispatch = typeof store.dispatch;
