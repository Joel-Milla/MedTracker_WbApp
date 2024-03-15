

const USERS = [
    {
        "idDocFirebase": "diego@mail.com",
        "telefono": "",
        "rol": "Paciente",
        "sexo": "",
        "estatura": "",
        "nombreCompleto": "Diego",
        "arregloDoctor": [
            "doctor@mail.com"
        ],
        "email": "diego@mail.com",
        "antecedentes": "",
        "id": "mDxafjggi1SLjnLj0T4Cf4fW0At1",
        "fechaNacimiento": {
            "seconds": 1708992787,
            "nanoseconds": 175516000
        },
        "symptoms": [
            {
                "idDocFirebase": "473F4CC9-B0E2-459E-B6DA-880D6798D694",
                "description": "3",
                "nombre": "3",
                "notificacion": "",
                "activo": true,
                "fecha": {
                    "seconds": 1705619897,
                    "nanoseconds": 944797000
                },
                "icon": "plus.viewfinder",
                "cuantitativo": true,
                "unidades": "",
                "id": "473F4CC9-B0E2-459E-B6DA-880D6798D694",
                "color": "#007AFF"
            },
            {
                "idDocFirebase": "B611D2AA-1B49-4DEE-AC97-BAD4FE4904C0",
                "icon": "plus.viewfinder",
                "notificacion": "",
                "description": "5",
                "activo": true,
                "cuantitativo": false,
                "nombre": "5",
                "color": "#007AFF",
                "unidades": "",
                "id": "B611D2AA-1B49-4DEE-AC97-BAD4FE4904C0",
                "fecha": {
                    "seconds": 1705621751,
                    "nanoseconds": 251857000
                }
            },
            {
                "idDocFirebase": "CF908A71-B78F-4D8B-9FAC-56ADD5EA45E1",
                "color": "#007AFF",
                "notificacion": "",
                "activo": true,
                "id": "CF908A71-B78F-4D8B-9FAC-56ADD5EA45E1",
                "icon": "plus.viewfinder",
                "unidades": "",
                "description": "6",
                "cuantitativo": true,
                "nombre": "6",
                "fecha": {
                    "seconds": 1705621772,
                    "nanoseconds": 790177000
                }
            },
            {
                "idDocFirebase": "E932624D-91D2-4B48-9FE9-FD9F39F4D210",
                "cuantitativo": true,
                "notificacion": "",
                "activo": true,
                "description": "7",
                "nombre": "7",
                "icon": "plus.viewfinder",
                "unidades": "",
                "fecha": {
                    "seconds": 1705621798,
                    "nanoseconds": 441668000
                },
                "id": "E932624D-91D2-4B48-9FE9-FD9F39F4D210",
                "color": "#007AFF"
            },
            {
                "idDocFirebase": "ECC75AA2-3A0F-41D5-B026-1C584873BD42",
                "cuantitativo": true,
                "notificacion": "",
                "activo": true,
                "description": "8",
                "color": "#007AFF",
                "unidades": "",
                "nombre": "8",
                "id": "ECC75AA2-3A0F-41D5-B026-1C584873BD42",
                "fecha": {
                    "seconds": 1705622318,
                    "nanoseconds": 370666000
                },
                "icon": "plus.viewfinder"
            },
            {
                "idDocFirebase": "FBD13725-DDAE-46E3-BCD1-9A798305D1AF",
                "id": "FBD13725-DDAE-46E3-BCD1-9A798305D1AF",
                "activo": true,
                "cuantitativo": false,
                "icon": "plus.viewfinder",
                "notificacion": "",
                "fecha": {
                    "seconds": 1705621319,
                    "nanoseconds": 881031000
                },
                "color": "#007AFF",
                "description": "4",
                "unidades": "",
                "nombre": "4"
            }
        ],
        "registers": [
            {
                "idDocFirebase": "127AB9D0-33E7-4054-B9CA-3297F12EA5DA",
                "id": "127AB9D0-33E7-4054-B9CA-3297F12EA5DA",
                "fecha": {
                    "seconds": 1705621034,
                    "nanoseconds": 115237000
                },
                "cantidad": 45,
                "notas": "",
                "idSymptom": "473F4CC9-B0E2-459E-B6DA-880D6798D694"
            },
            {
                "idDocFirebase": "8F4D3884-025F-443C-82C2-4D98C9BA9EC5",
                "id": "8F4D3884-025F-443C-82C2-4D98C9BA9EC5",
                "fecha": {
                    "seconds": 1705621801,
                    "nanoseconds": 705366000
                },
                "notas": "",
                "idSymptom": "E932624D-91D2-4B48-9FE9-FD9F39F4D210",
                "cantidad": 7
            },
            {
                "idDocFirebase": "9E912BB1-6CE1-4A2D-AE0F-0F5EFEBCE3AF",
                "fecha": {
                    "seconds": 1705621754,
                    "nanoseconds": 267099000
                },
                "idSymptom": "B611D2AA-1B49-4DEE-AC97-BAD4FE4904C0",
                "cantidad": 0,
                "notas": "",
                "id": "9E912BB1-6CE1-4A2D-AE0F-0F5EFEBCE3AF"
            },
            {
                "idDocFirebase": "ADF41663-518D-47DA-8C4C-02B99029F211",
                "notas": "",
                "idSymptom": "FBD13725-DDAE-46E3-BCD1-9A798305D1AF",
                "cantidad": 0,
                "fecha": {
                    "seconds": 1705621322,
                    "nanoseconds": 517066000
                },
                "id": "ADF41663-518D-47DA-8C4C-02B99029F211"
            },
            {
                "idDocFirebase": "C0F48E46-00CE-4000-80DC-80546422C5A7",
                "fecha": {
                    "seconds": 1705622321,
                    "nanoseconds": 820037000
                },
                "id": "C0F48E46-00CE-4000-80DC-80546422C5A7",
                "notas": "",
                "cantidad": 5,
                "idSymptom": "ECC75AA2-3A0F-41D5-B026-1C584873BD42"
            },
            {
                "idDocFirebase": "DDD652BF-BA3D-4F45-94E4-FBAB089D73F0",
                "idSymptom": "CF908A71-B78F-4D8B-9FAC-56ADD5EA45E1",
                "fecha": {
                    "seconds": 1705621775,
                    "nanoseconds": 789538000
                },
                "id": "DDD652BF-BA3D-4F45-94E4-FBAB089D73F0",
                "cantidad": 5,
                "notas": ""
            },
            {
                "idDocFirebase": "FB7300F5-D237-4FFA-996B-03BAF664AFA9",
                "id": "FB7300F5-D237-4FFA-996B-03BAF664AFA9",
                "idSymptom": "ECC75AA2-3A0F-41D5-B026-1C584873BD42",
                "cantidad": 6,
                "notas": "",
                "fecha": {
                    "seconds": 1705622324,
                    "nanoseconds": 823567000
                }
            }
        ]
    },
    {
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
    },
    {
        "idDocFirebase": "manu@mail.com",
        "fechaNacimiento": {
            "seconds": 1707864960,
            "nanoseconds": 0
        },
        "arregloDoctor": [],
        "nombreCompleto": "Manu",
        "sexo": "Masculino",
        "estatura": "2",
        "telefono": "100",
        "email": "manu@mail.com",
        "id": "dAzf4feLyxabbwQUdSlBRFmbMXV2",
        "rol": "Paciente",
        "antecedentes": "",
        "symptoms": [],
        "registers": []
    },
    {
        "idDocFirebase": "mario@mail.com",
        "telefono": "20",
        "id": "oU7plxXqVZOeOgT70RanfY6FYp52",
        "estatura": "1",
        "sexo": "Masculino",
        "antecedentes": "",
        "email": "mario@mail.com",
        "rol": "Paciente",
        "fechaNacimiento": {
            "seconds": 1707345840,
            "nanoseconds": 0
        },
        "nombreCompleto": "Mario",
        "arregloDoctor": [],
        "symptoms": [
            {
                "idDocFirebase": "0DD4BAE3-12EB-4BAB-BB6C-0FB2CCFCE019",
                "icon": "plus.viewfinder",
                "id": "0DD4BAE3-12EB-4BAB-BB6C-0FB2CCFCE019",
                "notificacion": "",
                "unidades": "",
                "nombre": "23",
                "color": "#007AFF",
                "description": "23",
                "cuantitativo": false,
                "fecha": {
                    "seconds": 1708641840,
                    "nanoseconds": 295516000
                },
                "activo": true
            }
        ],
        "registers": []
    }
]

export default USERS;