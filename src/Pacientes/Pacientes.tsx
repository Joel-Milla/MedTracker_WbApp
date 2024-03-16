import NavigationMenu from '../Global/NavigationMenu'

export default function Pacientes() {
	return (
		<div>
			<NavigationMenu title="Pacientes" appBarVisibleOnDesktop='block' appBarVisibleOnMobile='block' selectedOption={0} />
		</div>
	)
}