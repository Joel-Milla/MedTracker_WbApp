// External Components - Add react-router-dom imports
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
// Own components
import Root from './GlobalNavigation/Root';
import Pacientes from "./Pacientes/Pacientes";
import Dashboard from "./Dashboard/Dashboard";


// create router with JSX Route elements
const appRouter = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<Root />}>
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
