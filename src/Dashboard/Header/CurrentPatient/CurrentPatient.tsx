// External components
import { Autocomplete, AutocompleteItem } from "@nextui-org/react";

// Mock data to show names as an option
const names = [
  {
    value: "Joel Milla",
    label: "Joel Milla"
  },
  {
    value: "Diego Velazquez",
    label: "Diego Velazquez"
  }
  ,
  {
    value: "Angela",
    label: "Angela"
  }
  ,
  {
    value: "Sebastian",
    label: "Sebastian"
  },
  {
    value: "Christopher",
    label: "Christopher"
  }
]

function CurrentPatient() {
    return (
        <>
        {/* Use the autocomplete of nextUI to select from all the mock users */}
        <Autocomplete
                color="primary"
                label="Buscar"
                // variant="bordered" // This element makes the search bar transparent
                defaultItems={names}
                placeholder="Escoge dato salud"
            >
                {names.map((name) => (
                  // Set the autocomplete item with the mock data
                    <AutocompleteItem key={name.value} value={name.value}>
                        {name.label}
                    </AutocompleteItem>
                ))}
            </Autocomplete>
        </>
    )
}

export default CurrentPatient;