// Import own created types/models
import { Timestamp } from "./Symptom_Register"
import { Symptom } from "./Symptom_Register"
import { Register } from "./Symptom_Register"

export interface User {
    idDocFirebase: string,
    arregloDoctor: string[],
    email: string,
    rol: string,
    sexo: string,
    antecedentes: string,
    nombreCompleto: string,
    fechaNacimiento: Timestamp,
    telefono: string,
    estatura: string,
    id: string,
    symptoms: Symptom[],
    registers: Register[],
}
