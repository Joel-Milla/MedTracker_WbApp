// External Components - Add react-router-dom imports
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
// Own components
import Pacientes from "./Pacientes/Pacientes";
import Dashboard from "./Dashboard/Dashboard";
import NavigationMenu from "./Global/NavigationMenu";


// create router with JSX Route elements
const appRouter = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<NavigationMenu />}>
    <Route index element={<Pacientes />} />
    <Route path='Pacientes' element={<Pacientes />} />
    <Route path='Dashboard' element={<Dashboard />} />
  </Route>
))

function App() {
  return (
    <RouterProvider router={appRouter} />
  )
}

export default App
