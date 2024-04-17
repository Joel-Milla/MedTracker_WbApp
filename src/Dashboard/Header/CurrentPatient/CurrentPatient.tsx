// External components
import { Autocomplete, AutocompleteItem, Avatar } from "@nextui-org/react";
// External methods
import { Key } from "react";
// Redux connection
import { RootState } from "../../../state/store";
import { useDispatch, useSelector } from "react-redux";
import {
  setSelectedPatient,
  setPatientData,
} from "../../../state/Slices/userSlice";

function CurrentPatient() {
  // Obtain the current patients
  const patients = useSelector((state: RootState) => state.patients.pacientes);
  const selectedUser = useSelector(
    (state: RootState) => state.user.selectedPatient
  );

  // Use this hook to dispatch actions to redux
  const dispatch = useDispatch();

  // Handles the change of users
  const handleSelectionChange = (key: Key) => {
    const selectedKeyTab = key.toString();
    dispatch(setSelectedPatient(selectedKeyTab));
    dispatch(setPatientData(selectedKeyTab));
  };
  return (
    <>
      {/* Use the autocomplete of nextUI to select from all the mock users */}
      <Autocomplete
        color="primary"
        label="Buscar"
        variant="bordered" // This element makes the search bar transparent
        defaultItems={patients}
        defaultSelectedKey={selectedUser} //Show the selected user
        placeholder="Escoge al usuario"
        onSelectionChange={handleSelectionChange}
      >
        {/* Obtain the array from defaultItems and iterate though it to show the custom autocomplete */}
        {(patient) => (
          // <AutocompleteItem key={name.value}>{name.label}</AutocompleteItem>
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
    </>
  );
}

export default CurrentPatient;
