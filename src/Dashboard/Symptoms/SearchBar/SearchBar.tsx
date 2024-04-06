// External Components
import { Autocomplete, AutocompleteItem } from "@nextui-org/react";
// Redux connection
import { RootState } from "../../../state/store";
import { useDispatch, useSelector } from "react-redux";
import { setSearchText } from "../../../state/uiSlice";

function SearchBar() {
    // Mock data to obtain the list of symptoms from user
    const symptoms = useSelector((state: RootState) => state.user.patientData.symptoms);
    // Use this hook to dispatch actions to redux
    const dispatch = useDispatch();

    // Handle the change of search text
    const handleInputChange = (text: string) => {
        console.log(text);
        dispatch(setSearchText(text));
    }
    // Convert the current symptoms to the required format to show them on autocomplete
    const symptomValues = symptoms.map((symptom) => {
        return {
            label: symptom.nombre,
            value: symptom.nombre + symptom.id,
            description: symptom.description
        }
    });

    return (
        // Use autocomplete from nextui to show all the symtpoms
        <Autocomplete
            allowsCustomValue
            color="primary"
            label="Buscar"
            variant="bordered"
            defaultItems={symptomValues}
            onKeyDown={(e: any) => e.continuePropagation()} // stops an error from loggin on the console about 'stopPropagation'.
            placeholder="Escoge dato de salud"
            onInputChange={handleInputChange}
        >
            {/* Map the default items to an autocomplete item to be shown */}
            {(symptom) => <AutocompleteItem key={symptom.value}>{symptom.label}</AutocompleteItem>}
        </Autocomplete>
    );
}

export default SearchBar;