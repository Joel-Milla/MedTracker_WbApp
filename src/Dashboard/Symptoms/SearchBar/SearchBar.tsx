// External Components
import { Autocomplete, AutocompleteItem } from "@nextui-org/react";
// Models of data
import { Symptom } from "../../../Models/dashboardModels";
// Mock Data
import USERS from "../../../assets/MockData/UsersData";

function SearchBar() {
    // Mock data to obtain the list of symptoms from user 1
    const symptoms: Symptom[] = USERS[1].symptoms;
    // Convert the current symptoms to the required format to show them on automcplete
    const symptomValues = symptoms.map((symptom) => {
        return {
            label: symptom.nombre,
            value: symptom.nombre + symptom.id,
            description: symptom.description
        }
    })

    return (
        // Use autocomplete from nextui to show all the symtpoms
        <Autocomplete
            color="primary"
            label="Buscar"
            variant="bordered"
            defaultItems={symptomValues}
            placeholder="Escoge dato de salud"
        >
            {/* Map the default items to an autocomplete item to be shown */}
            {(symptom) => <AutocompleteItem key={symptom.value}>{symptom.label}</AutocompleteItem>}
        </Autocomplete>
    );
}

export default SearchBar;