import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface DoctorState {
    name: string;
    phone: string;
    email: string;
}

const initialState: DoctorState = {
    name: "",
    phone: "",
    email: "",
};

export const doctorSlice = createSlice({
    name: "doctor",
    initialState,
    reducers: {
        setName: (state, action: PayloadAction<string>) => {
            state.name = action.payload;
        },
        setPhone: (state, action: PayloadAction<string>) => {
            state.phone = action.payload;
        },
        setEmail: (state, action: PayloadAction<string>) => {
            state.email = action.payload;
        },
    },
});

export const { setName, setPhone, setEmail } = doctorSlice.actions;

export const selectName = (state: { doctor: DoctorState }) => state.doctor.name;
export const selectPhone = (state: { doctor: DoctorState }) =>
    state.doctor.phone;
export const selectEmail = (state: { doctor: DoctorState }) =>
    state.doctor.email;

export default doctorSlice.reducer;
