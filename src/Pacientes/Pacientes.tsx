import GridTarjetasPacientes from './GridTarjetasPacientes'
import { data } from './Paciente';
import SearchBar from './SearchBar';

function Pacientes() {
	return (
		<div>
			<SearchBar />
			<GridTarjetasPacientes pacientes={data} />
		</div>
	);
}

export default Pacientes;