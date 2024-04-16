// External libaries
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
// Import types/models
import { User } from "../../Models/User";
// Import data
import USERS from "../../assets/MockData/UsersData";

const selectedPatient = "";
const patientDataInitialState: User = {
  idDocFirebase: "",
  telefono: "",
  id: "",
  estatura: "",
  sexo: "",
  antecedentes: "",
  email: "",
  rol: "",
  fechaNacimiento: {
    seconds: 0,
    nanoseconds: 0,
  },
  nombreCompleto: "",
  arregloDoctor: [],
  symptoms: [],
  registers: [],
};

export const userSlice = createSlice({
  name: "user",
  initialState: {
    selectedPatient: selectedPatient,
    patientData: patientDataInitialState,
  },
  reducers: {
    setSelectedUser: (state, action: PayloadAction<string>) => {
      state.selectedPatient = action.payload;
    },
    setPatientData: (state, action: PayloadAction<string>) => {
      USERS.forEach((user) => {
        if (user.email == action.payload) {
          state.patientData = user;
        }
      });
    },
  },
});

export const { setSelectedUser, setPatientData } = userSlice.actions;

export default userSlice.reducer;
