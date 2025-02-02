// External components
import { List, ListItem } from "@tremor/react";
// Redux connection
import { RootState } from "../../../state/store";
import { useSelector } from "react-redux";
// Utils functions
import { timestampToDate, dateToString } from "../../../Utils/Utils";

function PersonalData() {
  // Obtain the current user
  const user = useSelector((state: RootState) => state.user.patientData);
  const birthDate = dateToString(timestampToDate(user.fechaNacimiento));

  return (
    <>
      {/* Use listItem of tremor and show the metadata of the user */}
      <List className="">
        <ListItem key="header">
          <span className="font-bold">Informacion </span>
          <span className="font-bold">Valores</span>
        </ListItem>
        <ListItem key="nombreCompleto">
          <span>Nombre Completo: </span>
          <span>{user.nombreCompleto}</span>
        </ListItem>
        <ListItem key="fechaNacimiento">
          <span>Fecha de Nacimiento: </span>
          <span>{birthDate}</span>
        </ListItem>
        <ListItem key="email">
          <span>Email: </span>
          <span>{user.email}</span>
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
          <span>Estatura (en metros): </span>
          <span>{user.estatura}</span>
        </ListItem>
      </List>
    </>
  );
}

export default PersonalData;
