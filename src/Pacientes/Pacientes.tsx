import GridTarjetasPacientes from "./GridTarjetasPacientes";
import { data } from "./Paciente";
import HeaderPacientes from "./HeaderPacientes";

function Pacientes() {
    return (
        <div className="container mx-auto mb-10 p-3">
            <HeaderPacientes cantidadPacientes={data.length} />
            {/* Add same margin between header and grid that dashboard is using */}
            <div className="mt-5">
                <GridTarjetasPacientes pacientes={data} />
            </div>
        </div>
    );
}

export default Pacientes;
