// Timestamp
type Timestamp = {
    seconds: number,
    nanoseconds: number,
}
// Symptom model
export interface Symptom {
    "idDocFirebase": string,
    "fecha": Timestamp,
    "color": string,
    "cuantitativo": boolean,
    "unidades": string,
    "icon": string,
    "description": string,
    "id": string,
    "nombre": string,
    "notificacion": string,
    "activo": boolean
}

// Register model
export interface Register {
    "fecha": string,
    "idSymptom": string,
    "notas": string,
    "cantidad": number,
    "id": string
}

// Structure for multiple objects
export type SymptomsObject = { [key: string]: Symptom };
export type RegisterObject = { [key: string]: Register };

// Properties of symptom list
export interface SymptomListProps {
    symptoms: SymptomsObject[]
}

// Properties of symptom list
export interface SymptomProps {
    symptom: Symptom
}

// Properties of graph
export interface GraphProps {
    symptom: Symptom,
    registers: Register[]
}