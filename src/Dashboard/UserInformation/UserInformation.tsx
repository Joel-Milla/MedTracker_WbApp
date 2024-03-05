// External components
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';


const userData = {
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
                    "fecha": "February 8, 2024 at 1:18:00 PM UTC-6",
                    "idSymptom": "CA2F8094-E00C-4FDA-893E-271B6D1DA1A5",
                    "notas": "",
                    "cantidad": 86.99828338623047,
                    "id": "3A52A0FC-76CC-4B60-9D5F-C1F481554632"
                }
            },
            {
                "3D42F5A7-6B6F-4633-BB0F-56F443F81060": {
                    "fecha": "February 11, 2024 at 1:51:32 PM UTC-6",
                    "idSymptom": "189D70BE-CC59-45E7-8E41-E43CBC6CD8CD",
                    "notas": "",
                    "cantidad": 0,
                    "id": "3D42F5A7-6B6F-4633-BB0F-56F443F81060"
                }
            },
            {
                "55872B00-577D-49C1-A157-ADB07A373827": {
                    "fecha": "February 2, 2024 at 1:35:00 PM UTC-6",
                    "idSymptom": "CA2F8094-E00C-4FDA-893E-271B6D1DA1A5",
                    "notas": "",
                    "cantidad": 0,
                    "id": "55872B00-577D-49C1-A157-ADB07A373827"
                }
            },
            {
                "6A35B7B9-35B3-40AF-B20A-906A4FFA6D8B": {
                    "fecha": "February 26, 2024 at 6:28:59 PM UTC-6",
                    "idSymptom": "1E284C31-33F0-4112-B9C0-0C43AED4EBE6",
                    "notas": "",
                    "cantidad": 43,
                    "id": "6A35B7B9-35B3-40AF-B20A-906A4FFA6D8B"
                }
            },
            {
                "6EF2B458-5639-4520-9E6F-7609292788B2": {
                    "fecha": "January 24, 2024 at 1:36:00 PM UTC-6",
                    "idSymptom": "CA2F8094-E00C-4FDA-893E-271B6D1DA1A5",
                    "notas": "",
                    "cantidad": 0,
                    "id": "6EF2B458-5639-4520-9E6F-7609292788B2"
                }
            },
            {
                "7C8825EC-2BDB-402A-880E-8665265DAF58": {
                    "fecha": "February 26, 2024 at 6:27:56 PM UTC-6",
                    "idSymptom": "1FC6C98A-D827-413A-8183-FD25A0771810",
                    "notas": "",
                    "cantidad": 58.72657012939453,
                    "id": "7C8825EC-2BDB-402A-880E-8665265DAF58"
                }
            },
            {
                "A4FA6C93-6BD3-499E-8822-CC98C4DC9E52": {
                    "fecha": "February 11, 2024 at 1:19:32 PM UTC-6",
                    "idSymptom": "44E5A71C-198B-489D-9CA7-F68F04044C36",
                    "notas": "",
                    "cantidad": 100,
                    "id": "A4FA6C93-6BD3-499E-8822-CC98C4DC9E52"
                }
            },
            {
                "C5DA3D1A-AB57-4F89-8F5D-150FACE5F499": {
                    "fecha": "February 6, 2024 at 1:35:00 PM UTC-6",
                    "idSymptom": "CA2F8094-E00C-4FDA-893E-271B6D1DA1A5",
                    "notas": "",
                    "cantidad": 67.56830596923828,
                    "id": "C5DA3D1A-AB57-4F89-8F5D-150FACE5F499"
                }
            },
            {
                "DE3A88E3-DBE0-4095-B65B-ABB432BE4392": {
                    "fecha": "February 11, 2024 at 1:50:21 PM UTC-6",
                    "idSymptom": "36FEEA09-3A63-4A48-B595-B9CCA47A3C40",
                    "notas": "",
                    "cantidad": 0,
                    "id": "DE3A88E3-DBE0-4095-B65B-ABB432BE4392"
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
}
function UserInformation() {
    const user = userData['joel@mail.com'];
    return (
        <>
            <div className='col 3'>
                <Card>
                    <Card.Body>
                        <Card.Title>{user.nombreCompleto}</Card.Title>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                        <ListGroup.Item>
                            Antecedentes:
                            <br></br>
                            {user.antecedentes}
                        </ListGroup.Item>
                        <ListGroup.Item>
                            Fecha de Nacimiento:
                            <br></br>
                            {user.fechaNacimiento}
                        </ListGroup.Item>
                        <ListGroup.Item>
                            Sexo:
                            <br></br>
                            {user.sexo}
                        </ListGroup.Item>
                        <ListGroup.Item>
                            Telefono:
                            <br></br>
                            {user.telefono}
                        </ListGroup.Item>
                        <ListGroup.Item>
                            Email:
                            <br></br>
                            {user.email}
                        </ListGroup.Item>
                        <ListGroup.Item>
                            Estatura:
                            <br></br>
                            {user.estatura}
                        </ListGroup.Item>
                    </ListGroup>
                </Card>
            </div>
        </>
    );
}

export default UserInformation;