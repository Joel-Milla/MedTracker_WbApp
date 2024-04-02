// External components
import { Listbox, ListboxItem } from "@nextui-org/react";
// Components
import SymptomCard from './SymptomCard';
// Redux connection
import { RootState } from "../../../state/store";
import { useSelector } from "react-redux";

function SymptomList() {
    // Obtain the current user
    const symptoms = useSelector((state: RootState) => state.user.symptoms);
    return (
        <>
        {/* Use a list to show all the symptoms as a list */}
            <Listbox
                aria-label="Actions"
            >
                {/* Map the current users to a listBox */}
                {symptoms.map((symptom) => {
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