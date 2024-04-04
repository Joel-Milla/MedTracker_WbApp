import GridTarjetasPacientes from "./GridTarjetasPacientes";
import { data } from "./Paciente";
import HeaderPacientes from "./HeaderPacientes";

function Pacientes() {
    return (
        <div className="container mx-auto mb-10 p-3">
            <HeaderPacientes cantidadPacientes={data.length} />
            <GridTarjetasPacientes pacientes={data} />
        </div>
    );
}

export default Pacientes;
