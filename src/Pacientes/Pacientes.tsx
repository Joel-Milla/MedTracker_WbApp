import NavigationMenu from '../Global/NavigationMenu'
import TarjetaPaciente from './TarjetaPaciente'
import GridTarjetasPacientes from './GridTarjetasPacientes'
import { Paciente, data } from './Paciente';

function Pacientes() {
	return (
		<div>
			<NavigationMenu
				title="Pacientes"
				selectedOption={0}>
				<GridTarjetasPacientes pacientes={data} />
			</NavigationMenu>
		</div>
	);
}

export default Pacientes;