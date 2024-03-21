// External Components
import { Autocomplete, AutocompleteItem } from "@nextui-org/react";
// Models of data
import { Symptom } from "../../DashboardModels/dashboardModels";
// Mock Data
import USERS from "../../../assets/MockData/UsersData";

function SearchBar() {
    const symptoms: Symptom[] = USERS[1].symptoms;
    const symptomValues = symptoms.map((symptom) => {
        return {
            label: symptom.nombre,
            value: symptom.nombre + symptom.id,
            description: symptom.description
        }
    })

    return (
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