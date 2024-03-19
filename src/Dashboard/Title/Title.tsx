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
function Title() {
  return (
    <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
      <Autocomplete
        color="primary"
        label="Escoge a un paciente"
        className="max-w-xs"
      >
        {names.map((name) => (
          <AutocompleteItem key={name.value} value={name.value}>
            {name.label}
          </AutocompleteItem>
        ))}
      </Autocomplete>
    </div>
  );
}

export default Title;
