// External components
import { Textarea } from "@nextui-org/react";
// Redux connection
import { RootState } from "../../../state/store";
import { useSelector } from "react-redux";

function ClinicalInfo() {
    const user = useSelector((state: RootState) => state.user.patientData);
    return (
        <>
        {/* Show a read only text area with the clinical records of the patient */}
            <Textarea
                isReadOnly
                label="Antecedentes"
                variant="bordered"
                labelPlacement="outside"
                placeholder=""
                color="primary"
                defaultValue={user.antecedentes}
            />
        </>
    )
}

export default ClinicalInfo;