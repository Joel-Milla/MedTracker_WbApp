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

export const mockUser: User = {
    "idDocFirebase": "joel@mail.com",
    "arregloDoctor": [
        "doctor@mail.com"
    ],
    "email": "joel@mail.com",
    "rol": "Paciente",
    "sexo": "Masculino",
    "antecedentes": "Hello, my name is Joel",
    "nombreCompleto": "Joel",
    "fechaNacimiento": {
        "seconds": 1038005760,
        "nanoseconds": 0
    },
    "telefono": "5",
    "estatura": "1",
    "id": "cy8BtBlf3fSH3d5fFqozX7FhXF03",
    "symptoms": [
        {
            "idDocFirebase": "189D70BE-CC59-45E7-8E41-E43CBC6CD8CD",
            "id": "189D70BE-CC59-45E7-8E41-E43CBC6CD8CD",
            "unidades": "",
            "description": "Numero de pasos que he dado",
            "color": "#007AFF",
            "activo": false,
            "fecha": {
                "seconds": 1707681059,
                "nanoseconds": 711544000
            },
            "notificacion": "",
            "cuantitativo": false,
            "nombre": "Pasos diarios",
            "icon": "44.square.fill"
        },
        {
            "idDocFirebase": "1E284C31-33F0-4112-B9C0-0C43AED4EBE6",
            "icon": "plus.viewfinder",
            "unidades": "",
            "cuantitativo": true,
            "fecha": {
                "seconds": 1708993739,
                "nanoseconds": 202155000
            },
            "id": "1E284C31-33F0-4112-B9C0-0C43AED4EBE6",
            "description": "Cuant",
            "notificacion": "",
            "nombre": "Fatiga",
            "activo": false,
            "color": "#007AFF"
        },
        {
            "idDocFirebase": "1FC6C98A-D827-413A-8183-FD25A0771810",
            "icon": "plus.viewfinder",
            "id": "1FC6C98A-D827-413A-8183-FD25A0771810",
            "color": "#007AFF",
            "fecha": {
                "seconds": 1708993676,
                "nanoseconds": 182454000
            },
            "activo": false,
            "notificacion": "",
            "unidades": "",
            "cuantitativo": false,
            "description": "12",
            "nombre": "Peso"
        },
        {
            "idDocFirebase": "36FEEA09-3A63-4A48-B595-B9CCA47A3C40",
            "nombre": "Test4",
            "icon": "plus.viewfinder",
            "description": "5",
            "cuantitativo": false,
            "color": "#007AFF",
            "id": "36FEEA09-3A63-4A48-B595-B9CCA47A3C40",
            "activo": false,
            "notificacion": "",
            "unidades": "",
            "fecha": {
                "seconds": 1707681017,
                "nanoseconds": 515949000
            }
        },
        {
            "idDocFirebase": "44E5A71C-198B-489D-9CA7-F68F04044C36",
            "id": "44E5A71C-198B-489D-9CA7-F68F04044C36",
            "cuantitativo": false,
            "fecha": {
                "seconds": 1705619554,
                "nanoseconds": 98453000
            },
            "nombre": "Test5",
            "icon": "plus.viewfinder",
            "unidades": "",
            "color": "#007AFF",
            "notificacion": "",
            "description": "Test5",
            "activo": false
        },
        {
            "idDocFirebase": "CA2F8094-E00C-4FDA-893E-271B6D1DA1A5",
            "activo": false,
            "fecha": {
                "seconds": 1705619547,
                "nanoseconds": 256026000
            },
            "unidades": "",
            "nombre": "Test6",
            "description": "3",
            "color": "#007AFF",
            "icon": "plus.viewfinder",
            "cuantitativo": false,
            "notificacion": "",
            "id": "CA2F8094-E00C-4FDA-893E-271B6D1DA1A5"
        }
    ],
    "registers": [
        // Use an array function to generate an array of x length with mock data
        ...Array.from({ length: 365 }, (_, i) => ({
            idDocFirebase: `Register_Test1_${i}`,
            id: `Register_Test1_${i}`,
            notas: 'Numero de pasos diarios',
            cantidad: Math.floor(Math.random() * 10000), // Example value
            idSymptom: "189D70BE-CC59-45E7-8E41-E43CBC6CD8CD", // Symptom ID
            fecha: {
                seconds: 1712165044 - (i * 86400), // Example timestamp, the first element is the current data obtained by Math.floor(Date.now() / 1000)
                nanoseconds: 0,
            },
        })),
        ...Array.from({ length: 365 }, (_, i) => ({
            idDocFirebase: `Register_Test2_${i}`,
            id: `Register_Test2_${i}`,
            notas: `Fatiga durante el dia`,
            cantidad: Math.floor(Math.random() * 100), // Example value
            idSymptom: "1E284C31-33F0-4112-B9C0-0C43AED4EBE6", // Symptom ID
            fecha: {
                seconds: 1712165044 - (i * 86400), // Example timestamp, the first element is the current data obtained by Math.floor(Date.now() / 1000)
                nanoseconds: 0,
            },
        })),
        ...Array.from({ length: 365 }, (_, i) => ({
            idDocFirebase: `Register_Test3_${i}`,
            id: `Register_Test3_${i}`,
            notas: `Peso`,
            cantidad: Math.floor(Math.random() * (60 - 55 + 1)) + 55, // Example value
            idSymptom: "1FC6C98A-D827-413A-8183-FD25A0771810", // Symptom ID
            fecha: {
                seconds: 1712165044 - (i * 86400), // Example timestamp, the first element is the current data obtained by Math.floor(Date.now() / 1000)
                nanoseconds: 0,
            },
        })),
        ...Array.from({ length: 365 }, (_, i) => ({
            idDocFirebase: `Register_Test4_${i}`,
            id: `Register_Test4_${i}`,
            notas: `Register_Test4_${i}`,
            cantidad: Math.floor(Math.random() * 60), // Example value
            idSymptom: "36FEEA09-3A63-4A48-B595-B9CCA47A3C40", // Symptom ID
            fecha: {
                seconds: 1712165044 - (i * 86400), // Example timestamp, the first element is the current data obtained by Math.floor(Date.now() / 1000)
                nanoseconds: 0,
            },
        })),
        ...Array.from({ length: 365 }, (_, i) => ({
            idDocFirebase: `Register_Test5_${i}`,
            id: `Register_Test5_${i}`,
            notas: `Register_Test5_${i}`,
            cantidad: Math.floor(Math.random() * 60), // Example value
            idSymptom: "44E5A71C-198B-489D-9CA7-F68F04044C36", // Symptom ID
            fecha: {
                seconds: 1712165044 - (i * 86400), // Example timestamp, the first element is the current data obtained by Math.floor(Date.now() / 1000)
                nanoseconds: 0,
            },
        })),
        ...Array.from({ length: 365 }, (_, i) => ({
            idDocFirebase: `Register_Test6_${i}`,
            id: `Register_Test6_${i}`,
            notas: `Register_Test6_${i}`,
            cantidad: Math.floor(Math.random() * 60), // Example value
            idSymptom: "CA2F8094-E00C-4FDA-893E-271B6D1DA1A5", // Symptom ID
            fecha: {
                seconds: 1712165044 - (i * 86400), // Example timestamp, the first element is the current data obtained by Math.floor(Date.now() / 1000)
                nanoseconds: 0,
            },
        })),
    ]
};