// This code is for calling the patients of the doctor
import { db } from "../FirebaseConfig/config";
import { collection, getDocs, doc, getDoc } from "firebase/firestore";
// External libaries
import { createAsyncThunk, PayloadAction, createSlice } from "@reduxjs/toolkit";
// Import types/models
import { User } from "../../Models/User";
// Import data
import USERS from "../../assets/MockData/UsersData";
import { Register, Symptom } from "../../Models/Symptom_Register";

export const fetchPatientInformation = createAsyncThunk(
  "user/fetchPatientInformation",
  async () => {
    const email = "joel@mail.com";
    let patient: User;
    const symptomsCollectionRef = collection(db, "Users", email, "symptoms");
    const registersCollectionRef = collection(db, "Users", email, "registers");
    const patientsCollectionRef = doc(db, "Users", email);
    try {
      // Get the symptoms of the user
      const symptomsQuerySnapshot = await getDocs(symptomsCollectionRef);
      const symptoms: Symptom[] = symptomsQuerySnapshot.docs.map((doc) => ({
        idDocFirebase: doc.id,
        fecha: doc.data().creationDate || { seconds: 0, nanoseconds: 0 },
        color: doc.data().color || "",
        cuantitativo: doc.data().isQuantitative || "",
        unidades: doc.data().units || "",
        icon: doc.data().icon || "",
        description: doc.data().description || "",
        id: doc.data().id || "",
        nombre: doc.data().name || "",
        notificacion: doc.data().notification || "",
        activo: doc.data().isFavorite || "",
      }));

      // Get the register of the user
      const registersQuerySnapshot = await getDocs(registersCollectionRef);
      const registers: Register[] = registersQuerySnapshot.docs.map((doc) => ({
        idDocFirebase: doc.id,
        fecha: doc.data().date || { seconds: 0, nanoseconds: 0 },
        idSymptom: doc.data().idSymptom || "",
        notas: doc.data().notes || "",
        cantidad: doc.data().amount || 0,
        id: doc.data().id || "",
      }));

      // Get patient info
      const patientQuerySnapshot = await getDoc(patientsCollectionRef);
      if (patientQuerySnapshot.exists()) {
        patient = {
          idDocFirebase: email,
          arregloDoctor: patientQuerySnapshot.data().doctors || [],
          email: patientQuerySnapshot.data().email || "",
          rol: patientQuerySnapshot.data().rol || "",
          sexo: patientQuerySnapshot.data().sex || "",
          antecedentes: patientQuerySnapshot.data().clinicalHistory || "",
          nombreCompleto: patientQuerySnapshot.data().name || "",
          fechaNacimiento: patientQuerySnapshot.data().birthdate || {
            seconds: 0,
            nanoseconds: 0,
          },
          telefono: patientQuerySnapshot.data().phone || "",
          estatura: patientQuerySnapshot.data().height || "",
          id: patientQuerySnapshot.data().id || "",
          symptoms: symptoms,
          registers: registers,
        };
      } else {
        patient = {
          idDocFirebase: "",
          arregloDoctor: [],
          email: "",
          rol: "",
          sexo: "",
          antecedentes: "",
          nombreCompleto: "",
          fechaNacimiento: {
            seconds: 0,
            nanoseconds: 0,
          },
          telefono: "",
          estatura: "",
          id: "",
          symptoms: symptoms,
          registers: registers,
        };
      }

      return patient;
    } catch (error) {
      console.log("[userSlice] Error fetching patient info: ", error);
    }
    return {
      idDocFirebase: "",
      arregloDoctor: [],
      email: "",
      rol: "",
      sexo: "",
      antecedentes: "",
      nombreCompleto: "",
      fechaNacimiento: {
        seconds: 0,
        nanoseconds: 0,
      },
      telefono: "",
      estatura: "",
      id: "",
      symptoms: [],
      registers: [],
    };
  }
);

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
    isLoading: false,
    hasError: false,
  },
  reducers: {
    setSelectedPatient: (state, action: PayloadAction<string>) => {
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

  extraReducers: (builder) => {
    builder
      .addCase(fetchPatientInformation.pending, (state) => {
        state.isLoading = true;
        state.hasError = false;
      })
      .addCase(fetchPatientInformation.rejected, (state) => {
        state.isLoading = false;
        state.hasError = true;
      })
      .addCase(fetchPatientInformation.fulfilled, (state, action) => {
        state.isLoading = false;
        state.hasError = false;
        state.patientData = action.payload;
      });
  },
});

export const { setSelectedPatient, setPatientData } = userSlice.actions;

export default userSlice.reducer;
