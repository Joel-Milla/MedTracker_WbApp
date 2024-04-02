// External libraries
import { configureStore } from "@reduxjs/toolkit"; // To create the store of redux
import patientsReducer from "./patientsSlice";

export const store = configureStore({
    reducer: {
        patients: patientsReducer,
    },
});

// Get the type of state store so it can be access easily through the app
export type RootState = ReturnType<typeof store.getState>;

// Get the type of the function dispatch to export it and use it
export type AppDispatch = typeof store.dispatch;