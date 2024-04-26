// External functions
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
import SignUp from "./Authentication/SignUp";
import LogIn from "./Authentication/LogIn";
// import CurrentUser from "./temp";
// import ProfilePage from "./Profile/ProfilePage";
import ProfilePage2 from "./Profile/ProfilePage2";

// create router with JSX Route elements
const appRouter = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />} errorElement={<ErrorPage />}>
      {/* Use navigate to render signup as the default page */}
      <Route index element={<SignUp />} />
      <Route path="signup" element={<SignUp />} />
      <Route path="login" element={<LogIn />} />
      <Route path="pacientes" element={<Pacientes />} />
      <Route path="dashboard" element={<Dashboard />} />
      <Route path="notificaciones" element={<Pacientes />} />
      <Route path="perfil" element={<ProfilePage2 />} />
      <Route path="ajustes" element={<Pacientes />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={appRouter} />;
}

export default App;
