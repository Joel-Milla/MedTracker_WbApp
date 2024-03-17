import NavigationMenu from '../Global/NavigationMenu'

export default function Pacientes() {
	return (
		<div>
			<NavigationMenu
				title="Pacientes"
				appBarVisibleOnMobile='block'
				appBarVisibleOnTablet='block'
				appBarVisibleOnDesktop='block'
				selectedOption={0}>
				<h1>TARJETASSS</h1>
			</NavigationMenu>
		</div>
	)
}