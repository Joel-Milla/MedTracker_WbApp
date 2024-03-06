// Symptom model
export interface Symptom {
    "fecha": string,
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

// Symptom structure of object
export type SymptomsObject = { [key: string]: Symptom };

export interface SymptomListProps {
    symptom: Symptom
}