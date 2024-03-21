import { BrowserRouter, Routes, Route } from "react-router-dom";
import Pacientes from "./Pacientes/Pacientes";
import Dashboard from "./Dashboard/Dashboard";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/pacientes" element={<Pacientes />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
