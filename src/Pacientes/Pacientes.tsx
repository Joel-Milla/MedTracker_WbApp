import NavigationMenu from '../Global/NavigationMenu'
import TarjetaPaciente from './TarjetaPaciente'

export default function Pacientes() {
	return (
		<div>
			<NavigationMenu
				title="Pacientes"
				selectedOption={0}>
				<TarjetaPaciente nombre='Christopher Pedraza Pohlenz' fechaUltimoRegistro='27 febrero' />
			</NavigationMenu>
		</div>
	)
}