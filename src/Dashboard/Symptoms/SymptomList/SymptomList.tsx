// External components
import { Listbox, ListboxItem } from "@nextui-org/react";
// Components
import SymptomCard from './SymptomCard';
// Redux connection
import { RootState } from "../../../state/store";
import { useSelector } from "react-redux";
import { useState } from "react";

function SymptomList() {
    // Obtain the current user
    const symptoms = useSelector((state: RootState) => state.user.symptoms);
    // Save the selected key and its initial state
    const initialSelection = symptoms.length > 0 ? new Set([symptoms[0].id]) : new Set([]);
    const [selectedKeys, setSelectedKeys] = useState(initialSelection);


    // Handles the selectedKeys based on the selection
    const handleSelectionChange = (keys: Set<string> | any) => {
        setSelectedKeys(new Set(keys));
    };
    return (
        <>
            {/* Use a list to show all the symptoms as a list */}
            <Listbox
                aria-label="Actions"
                // Handles when the user selects a symptom
                selectionMode="multiple"
                selectedKeys={selectedKeys}
                onSelectionChange={handleSelectionChange}
                shouldHighlightOnFocus={true}
            >
                {/* Map the current users to a listBox */}
                {symptoms.map((symptom) => {
                    return (
                        // Set the key, value and color of the item
                        <ListboxItem 
                        key={symptom.id} 
                        color="primary" 
                        textValue={symptom.nombre}
                        shouldHighlightOnFocus={true}
                        >
                            {/* Show a symptom card as the value */}
                            <SymptomCard
                                symptom={symptom}
                            />
                        </ListboxItem>
                    )
                })}
            </Listbox>
        </>
    )
}

export default SymptomList;