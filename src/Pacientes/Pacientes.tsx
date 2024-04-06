// Redux connection
import { RootState } from "../state/store";
import { useSelector } from "react-redux";
// Own components
import GridTarjetasPacientes from "./GridTarjetasPacientes";
import HeaderPacientes from "./HeaderPacientes";

function Pacientes() {
    // Obtain the patients of the doctor
	const patients = useSelector((state: RootState) => state.patients.pacientes);
    return (
        <div className="container mx-auto mb-10 p-3">
            <HeaderPacientes cantidadPacientes={patients.length} />
            {/* Add same margin between header and grid that dashboard is using */}
            <div className="mt-5">
                <GridTarjetasPacientes />
            </div>
        </div>
    );
}

export default Pacientes;
