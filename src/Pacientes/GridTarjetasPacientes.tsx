// Redux connection
import { RootState } from "../state/store";
import { useSelector } from "react-redux";
// External components
import Grid from '@mui/material/Unstable_Grid2';
import Box from '@mui/material/Box';
// Own components
import TarjetaPaciente from './TarjetaPaciente';
import { Paciente } from './Paciente';

interface GridTarjetasPacientesProps {
	pacientes: Paciente[];
}

function GridTarjetasPacientes({ pacientes }: GridTarjetasPacientesProps) {
	const patientSearchText = useSelector((state: RootState) => state.ui.patientSearchText);
	return (
		<Box sx={{ flexGrow: 1 }}>
			{/* <Grid container spacing={8}> */}
			<Grid container spacing={4}>
				{/* First fitler the exsiting patients and then show them as a card */}
				{pacientes
				.filter((pacient) => pacient.nombre.toLocaleLowerCase().includes(patientSearchText))
				.map((paciente) => (
					// <Grid xs={12} sm={6} md={6} key={paciente.id}>
					<Grid xs={12} sm={6} md={4} key={paciente.id}>
						<TarjetaPaciente {...paciente} />
					</Grid>
				))}
			</Grid>
		</Box>
	);
}

export default GridTarjetasPacientes;