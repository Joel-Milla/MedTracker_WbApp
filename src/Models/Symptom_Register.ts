// Timestamp
export type Timestamp = {
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
    "idDocFirebase": string,
    "fecha": Timestamp,
    "idSymptom": string,
    "notas": string,
    "cantidad": number,
    "id": string
}