// This code is for calling the patients of the doctor
import { db } from "../FirebaseConfig/config";
import { collection, getDocs } from "firebase/firestore";
// External libaries
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Patient } from "../../Models/Patients";

export const loadPatients = createAsyncThunk(
  "patients/fetchDoctorPatients",
  async (): Promise<Patient[]> => {
    const patientsCollectionRef = collection(
      db,
      "Doctors-Patients",
      "doctor@mail.com",
      "patients"
    );
    try {
      const querySnapshot = await getDocs(patientsCollectionRef);
      const patients: Patient[] = querySnapshot.docs.map((doc) => ({
        idDocFirebase: doc.id,
        email: doc.data().email || "",
        name: doc.data().name || "",
        telefono: doc.data().phone || "",
        ultimoRegistro: "Feb 24" || "",
      }));
      console.log("Patients: ", patients);
      return patients;
    } catch (error) {
      console.error("Error fetching patients: ", error);
    }
    return [];
  }
);

const patients: Patient[] = [];
export const patientsSlice = createSlice({
  name: "patients",
  initialState: {
    pacientes: patients,
    isLoading: false,
    hasError: false,
  },
  reducers: {
    loadData: (state) => {
      return state;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadPatients.pending, (state) => {
        state.isLoading = true;
        state.hasError = false;
      })
      .addCase(loadPatients.rejected, (state) => {
        state.isLoading = false;
        state.hasError = true;
      })
      .addCase(loadPatients.fulfilled, (state, action) => {
        state.isLoading = false;
        state.hasError = false;
        state.pacientes = action.payload;
      });
  },
});

export const { loadData } = patientsSlice.actions;

export default patientsSlice.reducer;
