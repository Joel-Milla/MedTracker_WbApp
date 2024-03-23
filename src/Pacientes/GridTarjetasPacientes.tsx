import Grid from '@mui/material/Unstable_Grid2';
import Box from '@mui/material/Box';
import TarjetaPaciente from './TarjetaPaciente';
import { Paciente } from './Paciente';

interface GridTarjetasPacientesProps {
	pacientes: Paciente[];
}

function GridTarjetasPacientes({ pacientes }: GridTarjetasPacientesProps) {
	return (
		<Box sx={{ flexGrow: 1 }}>
			<Grid container spacing={4}>
				{pacientes.map((paciente) => (
					<Grid xs={12} sm={6} md={4} key={paciente.id}>
						<TarjetaPaciente {...paciente} />
					</Grid>
				))}
			</Grid>
		</Box>
	);
}

export default GridTarjetasPacientes;