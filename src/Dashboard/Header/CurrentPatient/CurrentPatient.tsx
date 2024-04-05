// External components
import { Autocomplete, AutocompleteItem } from "@nextui-org/react";
// External methods
import { Key } from "react";
// Redux connection
import { RootState } from "../../../state/store";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedUser, setPatientData } from "../../../state/userSlice";

function CurrentPatient() {
  // Obtain the current users and selected user
  const patients = useSelector((state: RootState) => state.patients.pacientes);
  const selectedUser = useSelector((state: RootState) => state.user.selectedPatient);

  // Transform data into format require by autocomplete
  const names = patients.map(patient => {
    return {
      value: patient.email,
      label: patient.name
    }
  });

  // Use this hook to dispatch actions to redux
  const dispatch = useDispatch();

  // Handles the change of users
  const handleSelectionChange = (key: Key) => {

    const selectedKeyTab = key.toString();
    dispatch(setSelectedUser(selectedKeyTab));
    dispatch(setPatientData(selectedKeyTab));

  };
  return (
    <>
      {/* Use the autocomplete of nextUI to select from all the mock users */}
      <Autocomplete
        color="primary"
        label="Buscar"
        variant="bordered" // This element makes the search bar transparent
        defaultItems={names}
        defaultSelectedKey={selectedUser} //Show the selected user
        placeholder="Escoge al usuario"
        onSelectionChange={handleSelectionChange}
      >
        {/* Map the names as an item to be shown and selected */}
        {(name) =>
          <AutocompleteItem key={name.value}>{name.label}</AutocompleteItem>
        }
      </Autocomplete>
    </>
  )
}

export default CurrentPatient;