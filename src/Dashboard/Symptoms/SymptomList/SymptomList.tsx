// External libaries
import { useEffect, useState } from "react";
// Redux connection
import { RootState } from "../../../state/store";
import { useDispatch, useSelector } from "react-redux";
// External components
import { Listbox, ListboxItem } from "@nextui-org/react";
// Components
import SymptomCard from "./SymptomCard";
import { setSelectedSymptoms } from "../../../state/Slices/uiSlice";

function SymptomList() {
  // Obtain the current patient, the symptoms and search text from the autocomplete
  const selectedPatient = useSelector(
    (state: RootState) => state.user.selectedPatient
  );
  const symptoms = useSelector(
    (state: RootState) => state.user.patientData.symptoms
  );
  const searchText = useSelector((state: RootState) => state.ui.searchText);

  // Save the selected key and its initial state
  const initialSelection = symptoms.length > 0 ? new Set([]) : new Set([]);
  const [selectedKeys, setSelectedKeys] = useState(initialSelection);
  // Use this hook to dispatch actions to redux
  const dispatch = useDispatch();

  // When tthe current patient changes, reset the selected keys of the list
  useEffect(() => {
    setSelectedKeys(new Set());
  }, [selectedPatient]);

  // Handles the selectedKeys based on the selection
  const handleSelectionChange = (keys: Set<string> | any) => {
    const keysArray: string[] = Array.from(keys); // Convert Set to Array
    setSelectedKeys(new Set(keys));
    dispatch(setSelectedSymptoms(keysArray)); // pass an array of strings because the data passed to a store must be serializable, meaning it can be transformed to JSON/XML/etc. A set is not serializable.
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
        disallowEmptySelection={false}
        emptyContent="No hay datos registrados"
      >
        {/* First filter if the symptoms includes the search text and then show them on the view */}
        {symptoms
          .filter((symptom) =>
            symptom.nombre.toLowerCase().includes(searchText)
          ) // checks that both strings are lowercase to compare them right
          .map((symptom) => {
            return (
              // Set the key, value and color of the item
              <ListboxItem
                key={symptom.id}
                color="primary"
                textValue={symptom.nombre}
              >
                {/* Show a symptom card as the value */}
                <SymptomCard symptom={symptom} />
              </ListboxItem>
            );
          })}
      </Listbox>
    </>
  );
}

export default SymptomList;
