// External Components
import { Autocomplete, AutocompleteItem } from "@nextui-org/react";
// Models of data
import { Symptom } from "../../DashboardModels/dashboardModels";
// Mock Data
import USERS from "../../../assets/MockData/UsersData";

function SearchBar() {
    // Mock data to obtain the list of symptoms from user 1
    const symptoms: Symptom[] = USERS[1].symptoms;
    // Conver the current symptoms to the required format to show them on automcplete
    const symptomValues = symptoms.map((symptom) => {
        return {
            label: symptom.nombre,
            value: symptom.nombre + symptom.id,
            description: symptom.description
        }
    })

    return (
        // Use autocomplete from nextui to show all the symtpoms
        <div className="flex w-full flex-col gap-2">
            <Autocomplete
                color="primary"
                label="Buscar"
                variant="bordered"
                defaultItems={symptomValues}
                placeholder="Escoge dato salud"
                className="w-full"
                fullWidth
            >
                {(item) => <AutocompleteItem key={item.value}>{item.label}</AutocompleteItem>}
            </Autocomplete>
        </div>
    );
}

export default SearchBar;