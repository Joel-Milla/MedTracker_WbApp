// External components
import { List, ListItem } from '@tremor/react';
// Mock Data
import USERS from "../../../assets/MockData/UsersData";

function PersonalData() {
    const user = USERS[1];
    return (
        <>
            <List className="mt-2">
                <ListItem key="header">
                    <span className='font-bold'>Informacion </span>
                    <span className='font-bold'>Valores</span>
                </ListItem>
                <ListItem key="telefono">
                    <span>Telefono: </span>
                    <span>{user.telefono}</span>
                </ListItem>
                <ListItem key="sexo">
                    <span>Sexo: </span>
                    <span>{user.sexo}</span>
                </ListItem>
                <ListItem key="estatura">
                    <span>Estatura: </span>
                    <span>{user.estatura} metro</span>
                </ListItem>
                <ListItem key="nombreCompleto">
                    <span>Nombre Completo: </span>
                    <span>{user.nombreCompleto}</span>
                </ListItem>
                <ListItem key="email">
                    <span>Email: </span>
                    <span>{user.email}</span>
                </ListItem>
                <ListItem key="fechaNacimiento">
                    <span>Fecha de Nacimiento: </span>
                    <span>27 Feb 2023</span>
                </ListItem>
            </List>
        </>
    )
}

export default PersonalData;