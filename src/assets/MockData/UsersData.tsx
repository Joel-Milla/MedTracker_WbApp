

const USERS = [
    {
        "diego@mail.com": {
            "fechaNacimiento": "February 26, 2024 at 6:13:07 PM UTC-6",
            "arregloDoctor": ["doctor@mail.com"],
            "antecedentes": "",
            "estatura": "",
            "id": "mDxafjggi1SLjnLj0T4Cf4fW0At1",
            "nombreCompleto": "Diego",
            "sexo": "",
            "telefono": "",
            "email": "diego@mail.com",
            "rol": "Paciente",
            "registers": [
                {
                    "127AB9D0-33E7-4054-B9CA-3297F12EA5DA": {
                        "fecha": "January 18, 2024 at 5:58:44 PM UTC-6", "idSymptom": "473F4CC9-B0E2-459E-B6DA-880D6798D694", "notas": "",
                        "cantidad": 45,
                        "id": "127AB9D0-33E7-4054-B9CA-3297F12EA5DA"
                    }
                },
                {
                    "8F4D3884-025F-443C-82C2-4D98C9BA9EC5": {
                        "fecha": "January 18, 2024 at 5:50:01 PM UTC-6",
                        "idSymptom": "E932624D-91D2-4B48-9FE9-FD9F39F4D210",
                        "notas": "",
                        "cantidad": 7,
                        "id": "8F4D3884-025F-443C-82C2-4D98C9BA9EC5"
                    }
                },
                {
                    "9E912BB1-6CE1-4A2D-AE0F-0F5EFEBCE3AF": {
                        "fecha": "January 18, 2024 at 5:49:14 PM UTC-6",
                        "idSymptom": "B611D2AA-1B49-4DEE-AC97-BAD4FE4904C0",
                        "notas": "",
                        "cantidad": 0,
                        "id": "9E912BB1-6CE1-4A2D-AE0F-0F5EFEBCE3AF"
                    }
                },
                {
                    "ADF41663-518D-47DA-8C4C-02B99029F211": {
                        "fecha": "January 18, 2024 at 5:42:02 PM UTC-6",
                        "idSymptom": "FBD13725-DDAE-46E3-BCD1-9A798305D1AF",
                        "notas": "",
                        "cantidad": 0,
                        "id": "ADF41663-518D-47DA-8C4C-02B99029F211"
                    }
                },
                {
                    "C0F48E46-00CE-4000-80DC-80546422C5A7": {
                        "fecha": "January 18, 2024 at 5:58:41 PM UTC-6",
                        "idSymptom": "ECC75AA2-3A0F-41D5-B026-1C584873BD42",
                        "notas": "",
                        "cantidad": 5,
                        "id": "C0F48E46-00CE-4000-80DC-80546422C5A7"
                    }
                },
                {
                    "DDD652BF-BA3D-4F45-94E4-FBAB089D73F0": {
                        "fecha": "January 18, 2024 at 5:49:35 PM UTC-6",
                        "idSymptom": "CF908A71-B78F-4D8B-9FAC-56ADD5EA45E1",
                        "notas": "",
                        "cantidad": 5,
                        "id": "DDD652BF-BA3D-4F45-94E4-FBAB089D73F0"
                    }
                },
                {
                    "FB7300F5-D237-4FFA-996B-03BAF664AFA9": {
                        "fecha": "January 18, 2024 at 5:58:44 PM UTC-6",
                        "idSymptom": "ECC75AA2-3A0F-41D5-B026-1C584873BD42",
                        "notas": "",
                        "cantidad": 6,
                        "id": "FB7300F5-D237-4FFA-996B-03BAF664AFA9"
                    }
                }
            ],
            "symptoms": [
                {
                    "473F4CC9-B0E2-459E-B6DA-880D6798D694": {
                        "fecha": "January 18, 2024 at 5:18:17PM UTC-6",
                        "color": "#007AFF",
                        "cuantitativo": true,
                        "unidades": "",
                        "icon": "plus.viewfinder",
                        "description": "3",
                        "id": "473F4CC9-B0E2-459E-B6DA-880D6798D694",
                        "nombre": "3",
                        "notificacion": "",
                        "activo": true
                    }
                },
                {
                    "B611D2AA-1B49-4DEE-AC97-BAD4FE4904C0": {
                        "fecha": "January 18, 2024 at 5:49:11 PM UTC-6",
                        "color": "#007AFF",
                        "cuantitativo": false,
                        "unidades": "",
                        "icon": "plus.viewfinder",
                        "description": "5",
                        "id": "B611D2AA-1B49-4DEE-AC97-BAD4FE4904C0",
                        "nombre": "5",
                        "notificacion": "",
                        "activo": true
                    }
                },
                {
                    "CF908A71-B78F-4D8B-9FAC-56ADD5EA45E1": {
                        "fecha": "January 18, 2024 at 5:49:32 PM UTC-6",
                        "color": "#007AFF",
                        "cuantitativo": true,
                        "unidades": "",
                        "icon": "plus.viewfinder",
                        "description": "6",
                        "id": "CF908A71-B78F-4D8B-9FAC-56ADD5EA45E1",
                        "nombre": "6",
                        "notificacion": "",
                        "activo": true
                    }
                },
                {
                    "E932624D-91D2-4B48-9FE9-FD9F39F4D210": {
                        "fecha": "January 18, 2024 at 5:49:58 PM UTC-6",
                        "color": "#007AFF",
                        "cuantitativo": true,
                        "unidades": "",
                        "icon": "plus.viewfinder",
                        "description": "7",
                        "id": "E932624D-91D2-4B48-9FE9-FD9F39F4D210",
                        "nombre": "7",
                        "notificacion": "",
                        "activo": true
                    }
                },
                {
                    "ECC75AA2-3A0F-41D5-B026-1C584873BD42": {
                        "fecha": "January 18, 2024 at 5:58:38 PM UTC-6",
                        "color": "#007AFF",
                        "cuantitativo": true,
                        "unidades": "",
                        "icon": "plus.viewfinder",
                        "description": "8",
                        "id": "ECC75AA2-3A0F-41D5-B026-1C584873BD42",
                        "nombre": "8",
                        "notificacion": "",
                        "activo": true
                    }
                },
                {
                    "FBD13725-DDAE-46E3-BCD1-9A798305D1AF": {
                        "fecha": "January 18, 2024 at 5:41:59 PM UTC-6",
                        "color": "#007AFF",
                        "cuantitativo": false,
                        "unidades": "",
                        "icon": "plus.viewfinder",
                        "description": "4",
                        "id": "FBD13725-DDAE-46E3-BCD1-9A798305D1AF",
                        "nombre": "4",
                        "notificacion": "",
                        "activo": true
                    }
                },
                {
                    "3A52A0FC-76CC-4B60-9D5F-C1F481554632": {
                        "fecha": "February 8",
                        "idSymptom": "CA2F8094-E00C-4FDA-893E-271B6D1DA1A5",
                        "notas": "Minor symptoms",
                        "cantidad": 86.99,
                        "id": "3A52A0FC-76CC-4B60-9D5F-C1F481554632"
                    }
                },
                {
                    "55872B00-577D-49C1-A157-ADB07A373827": {
                        "fecha": "February 2",
                        "idSymptom": "44E5A71C-198B-489D-9CA7-F68F04044C36",
                        "notas": "No symptoms",
                        "cantidad": 0,
                        "id": "55872B00-577D-49C1-A157-ADB07A373827"
                    }
                },
                {
                    "6EF2B458-5639-4520-9E6F-7609292788B2": {
                        "fecha": "January 24",
                        "idSymptom": "1FC6C98A-D827-413A-8183-FD25A0771810",
                        "notas": "Initial occurrence",
                        "cantidad": 0,
                        "id": "6EF2B458-5639-4520-9E6F-7609292788B2"
                    }
                },
                {
                    "C5DA3D1A-AB57-4F89-8F5D-150FACE5F499": {
                        "fecha": "February 6",
                        "idSymptom": "CA2F8094-E00C-4FDA-893E-271B6D1DA1A5",
                        "notas": "Improving",
                        "cantidad": 67.56,
                        "id": "C5DA3D1A-AB57-4F89-8F5D-150FACE5F499"
                    }
                },
                {
                    "A5B638D1-C657-4E2A-B3C4-A82154F3B5A9": {
                        "fecha": "February 12",
                        "idSymptom": "1E284C31-33F0-4112-B9C0-0C43AED4EBE6",
                        "notas": "Much better",
                        "cantidad": 95.36,
                        "id": "A5B638D1-C657-4E2A-B3C4-A82154F3B5A9"
                    }
                },
                {
                    "D4E3F6A2-CFE2-4F25-8A58-18333E0F2158": {
                        "fecha": "February 15",
                        "idSymptom": "36FEEA09-3A63-4A48-B595-B9CCA47A3C40",
                        "notas": "Significant improvement",
                        "cantidad": 120.48,
                        "id": "D4E3F6A2-CFE2-4F25-8A58-18333E0F2158"
                    }
                },
                {
                    "E3F1D3C1-AD67-4EAE-B8C8-84D168B8F84F": {
                        "fecha": "February 20",
                        "idSymptom": "44E5A71C-198B-489D-9CA7-F68F04044C36",
                        "notas": "Symptoms returned",
                        "cantidad": 50.21,
                        "id": "E3F1D3C1-AD67-4EAE-B8C8-84D168B8F84F"
                    }
                },
                {
                    "F2A3D4E5-B657-4C83-97D9-EA8F0B5C3DFF": {
                        "fecha": "February 25",
                        "idSymptom": "1FC6C98A-D827-413A-8183-FD25A0771810",
                        "notas": "Stable condition",
                        "cantidad": 77.13,
                        "id": "F2A3D4E5-B657-4C83-97D9-EA8F0B5C3DFF"
                    }
                },
                {
                    "B4C5D6E7-F8G9-H0I1-J2K3-L4M5N6O7P8Q9": {
                        "fecha": "March 1",
                        "idSymptom": "CA2F8094-E00C-4FDA-893E-271B6D1DA1A5",
                        "notas": "Getting worse",
                        "cantidad": 23.45,
                        "id": "B4C5D6E7-F8G9-H0I1-J2K3-L4M5N6O7P8Q9"
                    }
                },
                {
                    "R4S5T6U7-V8W9-X0Y1-Z2A3-B4C5D6E7F8G9": {
                        "fecha": "March 5",
                        "idSymptom": "36FEEA09-3A63-4A48-B595-B9CCA47A3C40",
                        "notas": "No symptoms observed",
                        "cantidad": 0,
                        "id": "R4S5T6U7-V8W9-X0Y1-Z2A3-B4C5D6E7F8G9"
                    }
                },
                {
                    "H1I2J3K4-L5M6-N7O8-P9Q0-R1S2T3U4V5W6": {
                        "fecha": "March 10",
                        "idSymptom": "1E284C31-33F0-4112-B9C0-0C43AED4EBE6",
                        "notas": "Minor improvement noted",
                        "cantidad": 58.79,
                        "id": "H1I2J3K4-L5M6-N7O8-P9Q0-R1S2T3U4V5W6"
                    }
                },
                {
                    "Z1X2C3V4-B5N6-M7L8-K9J8-H7G6F5E4D3C2": {
                        "fecha": "March 15",
                        "idSymptom": "44E5A71C-198B-489D-9CA7-F68F04044C36",
                        "notas": "Worsening condition",
                        "cantidad": 33.89,
                        "id": "Z1X2C3V4-B5N6-M7L8-K9J8-H7G6F5E4D3C2"
                    }
                }
            ]
        }
    },
    {
        "joel@mail.com": {
            "fechaNacimiento": "November 22, 2002 at 4:56:00 PM UTC-6",
            "arregloDoctor": ["doctor@mail.com"],
            "antecedentes": "5",
            "estatura": "1",
            "id": "cy8BtBlf3fSH3d5fFqozX7FhXF03",
            "nombreCompleto": "Joel",
            "sexo": "Masculino",
            "telefono": "6",
            "email": "joel@mail.com",
            "rol": "Paciente",
            "registers": [
                {
                    "3A52A0FC-76CC-4B60-9D5F-C1F481554632": {
                        "fecha": "February 8",
                        "idSymptom": "CA2F8094-E00C-4FDA-893E-271B6D1DA1A5",
                        "notas": "Minor symptoms",
                        "cantidad": 86.99,
                        "id": "3A52A0FC-76CC-4B60-9D5F-C1F481554632"
                    }
                },
                {
                    "55872B00-577D-49C1-A157-ADB07A373827": {
                        "fecha": "February 2",
                        "idSymptom": "44E5A71C-198B-489D-9CA7-F68F04044C36",
                        "notas": "No symptoms",
                        "cantidad": 0,
                        "id": "55872B00-577D-49C1-A157-ADB07A373827"
                    }
                },
                {
                    "6EF2B458-5639-4520-9E6F-7609292788B2": {
                        "fecha": "January 24",
                        "idSymptom": "1FC6C98A-D827-413A-8183-FD25A0771810",
                        "notas": "Initial occurrence",
                        "cantidad": 0,
                        "id": "6EF2B458-5639-4520-9E6F-7609292788B2"
                    }
                },
                {
                    "C5DA3D1A-AB57-4F89-8F5D-150FACE5F499": {
                        "fecha": "February 6",
                        "idSymptom": "CA2F8094-E00C-4FDA-893E-271B6D1DA1A5",
                        "notas": "Improving",
                        "cantidad": 67.56,
                        "id": "C5DA3D1A-AB57-4F89-8F5D-150FACE5F499"
                    }
                },
                {
                    "A5B638D1-C657-4E2A-B3C4-A82154F3B5A9": {
                        "fecha": "February 12",
                        "idSymptom": "1E284C31-33F0-4112-B9C0-0C43AED4EBE6",
                        "notas": "Much better",
                        "cantidad": 95.36,
                        "id": "A5B638D1-C657-4E2A-B3C4-A82154F3B5A9"
                    }
                },
                {
                    "D4E3F6A2-CFE2-4F25-8A58-18333E0F2158": {
                        "fecha": "February 15",
                        "idSymptom": "36FEEA09-3A63-4A48-B595-B9CCA47A3C40",
                        "notas": "Significant improvement",
                        "cantidad": 120.48,
                        "id": "D4E3F6A2-CFE2-4F25-8A58-18333E0F2158"
                    }
                },
                {
                    "E3F1D3C1-AD67-4EAE-B8C8-84D168B8F84F": {
                        "fecha": "February 20",
                        "idSymptom": "44E5A71C-198B-489D-9CA7-F68F04044C36",
                        "notas": "Symptoms returned",
                        "cantidad": 50.21,
                        "id": "E3F1D3C1-AD67-4EAE-B8C8-84D168B8F84F"
                    }
                },
                {
                    "F2A3D4E5-B657-4C83-97D9-EA8F0B5C3DFF": {
                        "fecha": "February 25",
                        "idSymptom": "1FC6C98A-D827-413A-8183-FD25A0771810",
                        "notas": "Stable condition",
                        "cantidad": 77.13,
                        "id": "F2A3D4E5-B657-4C83-97D9-EA8F0B5C3DFF"
                    }
                },
                {
                    "B4C5D6E7-F8G9-H0I1-J2K3-L4M5N6O7P8Q9": {
                        "fecha": "March 1",
                        "idSymptom": "CA2F8094-E00C-4FDA-893E-271B6D1DA1A5",
                        "notas": "Getting worse",
                        "cantidad": 23.45,
                        "id": "B4C5D6E7-F8G9-H0I1-J2K3-L4M5N6O7P8Q9"
                    }
                },
                {
                    "R4S5T6U7-V8W9-X0Y1-Z2A3-B4C5D6E7F8G9": {
                        "fecha": "March 5",
                        "idSymptom": "36FEEA09-3A63-4A48-B595-B9CCA47A3C40",
                        "notas": "No symptoms observed",
                        "cantidad": 0,
                        "id": "R4S5T6U7-V8W9-X0Y1-Z2A3-B4C5D6E7F8G9"
                    }
                },
                {
                    "H1I2J3K4-L5M6-N7O8-P9Q0-R1S2T3U4V5W6": {
                        "fecha": "March 10",
                        "idSymptom": "1E284C31-33F0-4112-B9C0-0C43AED4EBE6",
                        "notas": "Minor improvement noted",
                        "cantidad": 58.79,
                        "id": "H1I2J3K4-L5M6-N7O8-P9Q0-R1S2T3U4V5W6"
                    }
                },
                {
                    "Z1X2C3V4-B5N6-M7L8-K9J8-H7G6F5E4D3C2": {
                        "fecha": "March 15",
                        "idSymptom": "44E5A71C-198B-489D-9CA7-F68F04044C36",
                        "notas": "Worsening condition",
                        "cantidad": 33.89,
                        "id": "Z1X2C3V4-B5N6-M7L8-K9J8-H7G6F5E4D3C2"
                    }
                }
            ],
            "symptoms": [
                {
                    "189D70BE-CC59-45E7-8E41-E43CBC6CD8CD": {
                        "fecha": "February 11, 2024 at 1:50:59 PM UTC-6",
                        "color": "#007AFF",
                        "cuantitativo": false,
                        "unidades": "",
                        "icon": "44.square.fill",
                        "description": "6",
                        "id": "189D70BE-CC59-45E7-8E41-E43CBC6CD8CD",
                        "nombre": "Test6t",
                        "notificacion": "",
                        "activo": true
                    }
                },
                {
                    "1E284C31-33F0-4112-B9C0-0C43AED4EBE6": {
                        "fecha": "February 26, 2024 at 6:28:59 PM UTC-6",
                        "color": "#007AFF",
                        "cuantitativo": true,
                        "unidades": "",
                        "icon": "plus.viewfinder",
                        "description": "Cuant",
                        "id": "1E284C31-33F0-4112-B9C0-0C43AED4EBE6",
                        "nombre": "Test8",
                        "notificacion": "",
                        "activo": true
                    }
                },
                {
                    "1FC6C98A-D827-413A-8183-FD25A0771810": {
                        "fecha": "February 26, 2024 at 6:27:56 PM UTC-6",
                        "color": "#007AFF",
                        "cuantitativo": false,
                        "unidades": "",
                        "icon": "plus.viewfinder",
                        "description": "12",
                        "id": "1FC6C98A-D827-413A-8183-FD25A0771810",
                        "nombre": "Test7",
                        "notificacion": "",
                        "activo": true
                    }
                },
                {
                    "36FEEA09-3A63-4A48-B595-B9CCA47A3C40": {
                        "fecha": "February 11, 2024 at 1:50:17 PM UTC-6",
                        "color": "#007AFF",
                        "cuantitativo": false,
                        "unidades": "",
                        "icon": "plus.viewfinder",
                        "description": "5",
                        "id": "36FEEA09-3A63-4A48-B595-B9CCA47A3C40",
                        "nombre": "Test5",
                        "notificacion": "",
                        "activo": true
                    }
                },
                {
                    "44E5A71C-198B-489D-9CA7-F68F04044C36": {
                        "fecha": "January 18, 2024 at 5:12:34 PM UTC-6",
                        "color": "#007AFF",
                        "cuantitativo": false,
                        "unidades": "",
                        "icon": "plus.viewfinder",
                        "description": "Test4",
                        "id": "44E5A71C-198B-489D-9CA7-F68F04044C36",
                        "nombre": "Test4",
                        "notificacion": "",
                        "activo": true
                    }
                },
                {
                    "CA2F8094-E00C-4FDA-893E-271B6D1DA1A5": {
                        "fecha": "January 18, 2024 at 5:12:27 PM UTC-6",
                        "color": "#007AFF",
                        "cuantitativo": false,
                        "unidades": "",
                        "icon": "plus.viewfinder",
                        "description": "3",
                        "id": "CA2F8094-E00C-4FDA-893E-271B6D1DA1A5",
                        "nombre": "Test3",
                        "notificacion": "",
                        "activo": true
                    }
                }
            ]
        }
    },
    {
        "manu@mail.com": {
            "fechaNacimiento": "February 13, 2024 at 4:56:00 PM UTC-6",
            "arregloDoctor": [],
            "antecedentes": "",
            "estatura": "2",
            "id": "dAzf4feLyxabbwQUdSlBRFmbMXV2",
            "nombreCompleto": "Manu",
            "sexo": "Masculino",
            "telefono": "100",
            "email": "manu@mail.com",
            "rol": "Paciente",
            "registers": [],
            "symptoms": []
        }
    },
    {
        "mario@mail.com": {
            "fechaNacimiento": "February 7, 2024 at 4:44:00 PM UTC-6",
            "arregloDoctor": [],
            "antecedentes": "",
            "estatura": "1",
            "id": "oU7plxXqVZOeOgT70RanfY6FYp52",
            "nombreCompleto": "mario",
            "sexo": "Masculino",
            "telefono": "20",
            "email": "mario@mail.com",
            "rol": "Paciente",
            "registers": [],
            "symptoms": [
                {
                    "0DD4BAE3-12EB-4BAB-BB6C-0FB2CCFCE019": {
                        "fecha": "February 22, 2024 at 4:44:00 PM UTC-6", "color": "#007AFF",
                        "cuantitativo": false,
                        "unidades": "",
                        "icon": "plus.viewfinder",
                        "description": "23",
                        "id": "0DD4BAE3-12EB-4BAB-BB6C-0FB2CCFCE019", "nombre": "23",
                        "notificacion": "",
                        "activo": true
                    }
                }
            ]
        }
    }
]

export default USERS;