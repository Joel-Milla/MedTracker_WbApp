import GridTarjetasPacientes from './GridTarjetasPacientes'
import { data } from './Paciente';
import SearchBar from './SearchBar';

function Pacientes() {
	return (
		<div className='container mx-auto mb-10'>
			<SearchBar />
			<GridTarjetasPacientes pacientes={data} />
		</div>
	);
}

export default Pacientes;