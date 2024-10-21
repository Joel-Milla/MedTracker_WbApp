// Redux connection
import { RootState } from "../state/store";
import { useDispatch, useSelector } from "react-redux";
import { setPatientSearchText } from "../state/Slices/uiSlice";
// External components
import {
  Autocomplete,
  AutocompleteItem,
  Avatar,
  Skeleton,
} from "@nextui-org/react";

function SearchBar() {
  // Obtain the current patients
  const patients = useSelector((state: RootState) => state.patients.pacientes);
  // Loading state
  const isLoading = useSelector((state: RootState) => state.patients.isLoading);
  // Use this hook to dispatch actions to redux
  const dispatch = useDispatch();

  // Handle the change of search text
  const handleInputChange = (text: string) => {
    dispatch(setPatientSearchText(text));
  };

  return (
    <Skeleton
      isLoaded={!isLoading}
      className="w-full rounded-lg bg-persian-green-500"
    >
      <Autocomplete
        allowsCustomValue
        color="primary"
        label="Buscar"
        variant="bordered" // This element makes the search bar transparent
        placeholder="Escoge al usuario"
        defaultItems={patients}
        onKeyDown={(e: any) => e.continuePropagation()} // stops an error from loggin on the console about 'stopPropagation'.
        onInputChange={handleInputChange}
        aria-label="Selecciona a un paciente"
      >
        {(patient) => (
          <AutocompleteItem key={patient.email} textValue={patient.name}>
            <div className="flex justify-between items-center">
              <div className="flex gap-2 items-center">
                <Avatar
                  alt={patient.name}
                  className="flex-shrink-0"
                  size="sm"
                  src=""
                  // Show the initials of the name
                  name={patient.name}
                  showFallback
                  color="primary"
                />
                <div className="flex flex-col">
                  <span className="text-small">{patient.name}</span>
                </div>
              </div>
            </div>
          </AutocompleteItem>
        )}
      </Autocomplete>
    </Skeleton>
  );
}

export default SearchBar;
