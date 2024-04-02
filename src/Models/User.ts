// Import own created types/models
import { Timestamp } from "./Symptom_Register"
import { Symptom } from "./Symptom_Register"
import { Register } from "./Symptom_Register"

export interface User {
    idDocFirebase: String,
    arregloDoctor: String[],
    email: String,
    rol: String,
    sexo: String,
    antecedentes: String,
    nombreCompleto: String,
    fechaNacimiento: Timestamp,
    telefono: String,
    estatura: String,
    id: String,
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
    "antecedentes": "5",
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
            "description": "6",
            "color": "#007AFF",
            "activo": false,
            "fecha": {
                "seconds": 1707681059,
                "nanoseconds": 711544000
            },
            "notificacion": "",
            "cuantitativo": false,
            "nombre": "Test6t",
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
            "nombre": "Test8",
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
            "nombre": "Test7"
        },
        {
            "idDocFirebase": "36FEEA09-3A63-4A48-B595-B9CCA47A3C40",
            "nombre": "Test5",
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
            "nombre": "Test4",
            "icon": "plus.viewfinder",
            "unidades": "",
            "color": "#007AFF",
            "notificacion": "",
            "description": "Test4",
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
            "nombre": "Test3",
            "description": "3",
            "color": "#007AFF",
            "icon": "plus.viewfinder",
            "cuantitativo": false,
            "notificacion": "",
            "id": "CA2F8094-E00C-4FDA-893E-271B6D1DA1A5"
        }
    ],
    "registers": [
        {
            "idDocFirebase": "3D42F5A7-6B6F-4633-BB0F-56F443F81060",
            "id": "3D42F5A7-6B6F-4633-BB0F-56F443F81060",
            "notas": "",
            "cantidad": 0,
            "idSymptom": "189D70BE-CC59-45E7-8E41-E43CBC6CD8CD",
            "fecha": {
                "seconds": 1707681092,
                "nanoseconds": 183495000
            }
        },
        {
            "idDocFirebase": "6A35B7B9-35B3-40AF-B20A-906A4FFA6D8B",
            "fecha": {
                "seconds": 1708993739,
                "nanoseconds": 216163000
            },
            "cantidad": 43,
            "idSymptom": "1E284C31-33F0-4112-B9C0-0C43AED4EBE6",
            "id": "6A35B7B9-35B3-40AF-B20A-906A4FFA6D8B",
            "notas": ""
        },
        {
            "idDocFirebase": "6EF2B458-5639-4520-9E6F-7609292788B2",
            "cantidad": 0,
            "idSymptom": "CA2F8094-E00C-4FDA-893E-271B6D1DA1A5",
            "id": "6EF2B458-5639-4520-9E6F-7609292788B2",
            "fecha": {
                "seconds": 1706124960,
                "nanoseconds": 0
            },
            "notas": ""
        },
        {
            "idDocFirebase": "7C8825EC-2BDB-402A-880E-8665265DAF58",
            "id": "7C8825EC-2BDB-402A-880E-8665265DAF58",
            "notas": "",
            "cantidad": 58.72657012939453,
            "idSymptom": "1FC6C98A-D827-413A-8183-FD25A0771810",
            "fecha": {
                "seconds": 1708993676,
                "nanoseconds": 188878000
            }
        },
        {
            "idDocFirebase": "DE3A88E3-DBE0-4095-B65B-ABB432BE4392",
            "cantidad": 0,
            "idSymptom": "36FEEA09-3A63-4A48-B595-B9CCA47A3C40",
            "id": "DE3A88E3-DBE0-4095-B65B-ABB432BE4392",
            "fecha": {
                "seconds": 1707681021,
                "nanoseconds": 180688000
            },
            "notas": ""
        },
        {
            "idDocFirebase": "EDA9D89C-6C36-4DC7-86DC-53BE3D25B334",
            "idSymptom": "44E5A71C-198B-489D-9CA7-F68F04044C36",
            "fecha": {
                "seconds": 1707506340,
                "nanoseconds": 0
            },
            "notas": "",
            "cantidad": 0,
            "id": "EDA9D89C-6C36-4DC7-86DC-53BE3D25B334"
        }
    ]
};