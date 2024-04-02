// External components
import { Autocomplete, AutocompleteItem } from "@nextui-org/react";
// Redux connection
import { RootState } from "../../../state/store";
import { useSelector } from "react-redux";

function CurrentPatient() {
  // Obtain the current users
  const patients = useSelector((state: RootState) => state.patients);
  const names = patients.map(patient => {
    return {
      value: patient.email,
      label: patient.name
    }
  });
  return (
    <>
      {/* Use the autocomplete of nextUI to select from all the mock users */}
      <Autocomplete
        color="primary"
        label="Buscar"
        variant="bordered" // This element makes the search bar transparent
        defaultItems={names}
        placeholder="Escoge al usuario"
      >
        {/* Map the names as an item to be shown and selected */}
        {(name) => <AutocompleteItem key={name.value}>{name.label}</AutocompleteItem>}
      </Autocomplete>
    </>
  )
}

export default CurrentPatient;