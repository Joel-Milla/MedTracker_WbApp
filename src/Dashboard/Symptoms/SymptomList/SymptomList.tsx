// External components
import { Listbox, ListboxItem } from "@nextui-org/react";
// Components
import SymptomCard from './SymptomCard';
// Models
import { Symptom } from "../../../Models/dashboardModels";
// Mock Data
import USERS from "../../../assets/MockData/UsersData";

function SymptomList() {
    // Obtain the current user
    const currentUser = USERS[1];
    return (
        <>
        {/* Use a list to show all the symptoms as a list */}
            <Listbox
                aria-label="Actions"
            >
                {/* Map the current users to a listBox */}
                {currentUser.symptoms.map((symptom: Symptom) => {
                    return (
                        // Set the key, value and color of the item
                        <ListboxItem key={symptom.id} color="primary" textValue={symptom.nombre}>
                            {/* Show a symptom card as the value */}
                            <SymptomCard symptom={symptom} />
                        </ListboxItem>
                    )
                })}
            </Listbox>
        </>
    )
}

export default SymptomList;