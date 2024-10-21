// Redux connection
import { RootState } from "../state/store";
import { useSelector } from "react-redux";
// External components
import Grid from "@mui/material/Unstable_Grid2";
import Box from "@mui/material/Box";
// Own components
import TarjetaPaciente from "./TarjetaPaciente";

function GridTarjetasPacientes() {
  // Obtain the patients of the doctor
  const patients = useSelector((state: RootState) => state.patients.pacientes);
  const patientSearchText = useSelector(
    (state: RootState) => state.ui.patientSearchText
  );
  return (
    <Box sx={{ flexGrow: 1 }}>
      {/* <Grid container spacing={8}> */}
      <Grid container spacing={4}>
        {/* First fitler the exsiting patients and then sshow them as a card */}
        {patients
          .filter((patient) =>
            patient.name.toLocaleLowerCase().includes(patientSearchText)
          )
          .map((patient) => (
            // <Grid xs={12} sm={6} md={6} key={paciente.id}>
            <Grid xs={12} sm={6} md={4} key={patient.email}>
              <TarjetaPaciente {...patient} />
            </Grid>
          ))}
      </Grid>
    </Box>
  );
}

export default GridTarjetasPacientes;
