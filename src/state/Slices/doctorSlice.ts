import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface DoctorState {
    name: string;
    telephone: string;
    email: string;
}

const initialState: DoctorState = {
    name: "",
    telephone: "",
    email: "",
};

export const doctorSlice = createSlice({
    name: "doctor",
    initialState,
    reducers: {
        setName: (state, action: PayloadAction<string>) => {
            state.name = action.payload;
        },
        setTelephone: (state, action: PayloadAction<string>) => {
            state.telephone = action.payload;
        },
        setEmail: (state, action: PayloadAction<string>) => {
            state.email = action.payload;
        },
    },
});

export const { setName, setTelephone, setEmail } = doctorSlice.actions;

export const selectName = (state: { doctor: DoctorState }) => state.doctor.name;
export const selectTelephone = (state: { doctor: DoctorState }) =>
    state.doctor.telephone;
export const selectEmail = (state: { doctor: DoctorState }) =>
    state.doctor.email;

export default doctorSlice.reducer;
