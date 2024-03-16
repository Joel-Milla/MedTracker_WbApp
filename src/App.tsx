import NavigationMenu from './Global/NavigationMenu'
import Dashboard from './Dashboard/Dashboard'

function App() {
  return (
    <>
      <NavigationMenu selectedOption='Datos' title='Mis pacientes' appBarVisibleOnDesktop='block' appBarVisibleOnMobile='block' >
        <h1>Test</h1>
      </NavigationMenu>
      {/* <Dashboard /> */}
    </>
  )
}

export default App
