// Redux connection
// Redux connection
import { RootState } from "../state/store";
import { useDispatch, useSelector } from "react-redux";
// External functions
import { useEffect } from "react";
// Own functions
import { loadPatients } from "../state/Slices/patientsSlice";
// External components
import { Skeleton } from "@nextui-org/react";
// Own components
import GridTarjetasPacientes from "./GridTarjetasPacientes";
import HeaderPacientes from "./HeaderPacientes";

function Pacientes() {
  // Get the current logged user
  const currentUser = useSelector(
    (state: RootState) => state.currentUser.currentUser
  );
  // To dispatch actions to the store
  const dispatch = useDispatch();
  // Initialize the navigate function
  useEffect(() => {
    dispatch(loadPatients(currentUser));
  }, []);

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
