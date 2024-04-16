// Redux connection
import { useDispatch } from "react-redux";
import { setPatientSearchText } from "../state/Slices/uiSlice";
// Own components
import { Autocomplete, AutocompleteItem, Avatar } from "@nextui-org/react";
// Mock data
import { data } from "./Paciente";

function SearchBar() {
  // Use this hook to dispatch actions to redux
  const dispatch = useDispatch();

  // Handle the change of search text
  const handleInputChange = (text: string) => {
    console.log(text);
    dispatch(setPatientSearchText(text));
  };

  return (
    <Autocomplete
      allowsCustomValue
      color="primary"
      label="Buscar"
      variant="bordered" // This element makes the search bar transparent
      placeholder="Escoge al usuario"
      defaultItems={data}
      onKeyDown={(e: any) => e.continuePropagation()} // stops an error from loggin on the console about 'stopPropagation'.
      onInputChange={handleInputChange}
      // listboxProps={{
      //     hideSelectedIcon: true,
      //     itemClasses: {
      //         base: [
      //             "rounded-medium",
      //             "text-default-500",
      //             "transition-opacity",
      //             "data-[hover=true]:text-foreground",
      //             "dark:data-[hover=true]:bg-default-50",
      //             "data-[pressed=true]:opacity-70",
      //             "data-[hover=true]:bg-default-200",
      //             "data-[selectable=true]:focus:bg-default-100",
      //             "data-[focus-visible=true]:ring-default-500",
      //         ],
      //     },
      // }}
      aria-label="Selecciona a un paciente"
      // popoverProps={{
      //     offset: 10,
      //     classNames: {
      //         base: "rounded-large",
      //         content:
      //             "p-1 border-small border-default-100 bg-background",
      //     },
      // }}
    >
      {(item) => (
        <AutocompleteItem key={item.id} textValue={item.nombre}>
          <div className="flex justify-between items-center">
            <div className="flex gap-2 items-center">
              <Avatar
                alt={item.nombre}
                className="flex-shrink-0"
                size="sm"
                src=""
                // Show the initials of the name
                name={item.nombre}
                showFallback
                color="primary"
              />
              <div className="flex flex-col">
                <span className="text-small">{item.nombre}</span>
              </div>
            </div>
          </div>
        </AutocompleteItem>
      )}
    </Autocomplete>
  );
}

export default SearchBar;
