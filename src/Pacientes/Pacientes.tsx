// Redux connection
import { RootState } from "../state/store";
import { useSelector } from "react-redux";
// External components
import { Skeleton } from "@nextui-org/react";
// Own components
import GridTarjetasPacientes from "./GridTarjetasPacientes";
import HeaderPacientes from "./HeaderPacientes";

function Pacientes() {
  // Obtain the patients of the doctor
  const patients = useSelector((state: RootState) => state.patients.pacientes);
  // Loading state
  const isLoading = useSelector((state: RootState) => state.patients.isLoading);
  return (
    <div className="container mx-auto mb-10 p-3">
      <HeaderPacientes cantidadPacientes={patients.length} />
      {/* Add same margin between header and grid that dashboard is using */}
      <div className="mt-5">
        <Skeleton
          isLoaded={!isLoading}
          className="rounded-lg p-5 bg-persian-green-500"
        >
          <GridTarjetasPacientes />
        </Skeleton>
      </div>
    </div>
  );
}

export default Pacientes;
