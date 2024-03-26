// External components
import { Listbox, ListboxItem } from "@nextui-org/react";
// Components
import SymptomCard from './SymptomCard';
// Models
import { Symptom } from "../../DashboardModels/dashboardModels";
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
                onAction={(key) => alert(key)} >
                {currentUser.symptoms.map((symptom: Symptom) => {
                    return (
                        <ListboxItem key={symptom.id} color="primary" textValue={symptom.nombre}>
                            <SymptomCard symptom={symptom} />
                        </ListboxItem>
                    )
                })}
            </Listbox>
        </>
    )
}

export default SymptomList;