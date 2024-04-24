// External libraries
import { configureStore } from "@reduxjs/toolkit"; // To create the store of redux
import currentUserReducer from "./Slices/currentUserSlice";
import patientsReducer from "./Slices/patientsSlice";
import userReducer from "./Slices/userSlice";
import uiReducer from "./Slices/uiSlice";

export const store = configureStore({
  reducer: {
    currentUser: currentUserReducer,
    patients: patientsReducer,
    user: userReducer,
    ui: uiReducer,
  },
});

// Get the type of state store so it can be access easily through the app
export type RootState = ReturnType<typeof store.getState>;

// Get the type of the function dispatch to export it and use it
export type AppDispatch = typeof store.dispatch;
