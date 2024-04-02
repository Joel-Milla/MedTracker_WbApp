// Redux connection
import { RootState } from '../../../../state/store';
import { useSelector } from "react-redux";
// External components
import { Textarea } from "@nextui-org/react";

function Notes() {
    // Obtain the selected data point
    const selectedDataPoint = useSelector((state: RootState) => state.ui.selectedDataPoint);
    return (
        <>
            {/* Show in a textarea of nextui the notes of the current date */}
            <Textarea
                isReadOnly
                label="Notas del dia"
                variant="bordered"
                labelPlacement="outside"
                placeholder={selectedDataPoint.note}
                color="primary"
                defaultValue={selectedDataPoint.note}
            />
        </>
    )
}

export default Notes;