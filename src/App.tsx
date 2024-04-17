// Redux connection
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { loadPatients } from "./state/Slices/patientsSlice";
// React-router-dom imports
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
// Own components
import Root from "./GlobalNavigation/Root";
import ErrorPage from "./ErrorPage";
import Pacientes from "./Pacientes/Pacientes";
import Dashboard from "./Dashboard/Dashboard";

// create router with JSX Route elements
const appRouter = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />} errorElement={<ErrorPage />}>
      <Route index element={<Pacientes />} />
      <Route path="pacientes" element={<Pacientes />} />
      <Route path="dashboard" element={<Dashboard />} />
      <Route path="notificaciones" element={<Pacientes />} />
      <Route path="perfil" element={<Dashboard />} />
      <Route path="ajustes" element={<Pacientes />} />
    </Route>
  )
);

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadPatients());
  });

  return <RouterProvider router={appRouter} />;
}

export default App;
