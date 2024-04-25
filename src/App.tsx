import { useContext } from "react";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { AuthContext } from "./Authentication/AuthUser"; 

import Root from "./GlobalNavigation/Root";
import ErrorPage from "./ErrorPage";
import Pacientes from "./Pacientes/Pacientes";
import Dashboard from "./Dashboard/Dashboard";
import SignUp from "./Authentication/SignUp";
import LogIn from "./Authentication/LogIn";
import CurrentUser from "./temp";

function App() {
  const { user } = useContext(AuthContext); // Use useContext within the functional component

  // Define the routes based on authentication status
  const routes = (
    <Route path="/" element={<Root />} errorElement={<ErrorPage />}>
      {/* Use navigate to render signup as the default page */}
      <Route index element={user ? <Dashboard /> : <SignUp />} />
      <Route path="signup" element={<SignUp />} />
      <Route path="login" element={<LogIn />} />
      <Route path="pacientes" element={<Pacientes />} />
      <Route path="dashboard" element={<Dashboard />} />
      <Route path="notificaciones" element={<Pacientes />} />
      <Route path="perfil" element={<CurrentUser />} />
      <Route path="ajustes" element={<Pacientes />} />
    </Route>
  );

  // Create the router with the defined routes
  const appRouter = createBrowserRouter(createRoutesFromElements(routes));

  return <RouterProvider router={appRouter} />;
}

export default App;
