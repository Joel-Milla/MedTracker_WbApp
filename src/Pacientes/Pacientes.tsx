import NavigationMenu from '../Global/NavigationMenu'
import TarjetaPaciente from './TarjetaPaciente'

export default function Pacientes() {
	return (
		<div>
			<NavigationMenu
				title="Pacientes"
				selectedOption={0}>
				<TarjetaPaciente
					nombre='Christopher Pedraza Pohlenz'
					fechaUltimoRegistro='27 febrero'
					imagen='https://i.pravatar.cc/150?u=a04258114e29026302d'
					email='christopher@mail.com'
					celular='5544332211'
				/>
			</NavigationMenu>
		</div>
	)
}