// External components
import { Autocomplete, AutocompleteItem } from "@nextui-org/react";

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
            <Autocomplete
                color="primary"
                label="Escoge a un paciente"
            >
                {names.map((name) => (
                    <AutocompleteItem key={name.value} value={name.value}>
                        {name.label}
                    </AutocompleteItem>
                ))}
            </Autocomplete>
        </>
    )
}

export default CurrentPatient;