import NavigationMenu from '../GlobalNavigation/NavigationMenu'
import TarjetaPaciente from './TarjetaPaciente'
import GridTarjetasPacientes from './GridTarjetasPacientes'
import { Paciente, data } from './Paciente';
import SearchBar from './SearchBar';

function Pacientes() {
	return (
		<div>
			<NavigationMenu
				title="Pacientes"
				selectedOption={0}
			>
				<SearchBar />
				<GridTarjetasPacientes pacientes={data} />
			</NavigationMenu>
		</div>
	);
}

export default Pacientes;