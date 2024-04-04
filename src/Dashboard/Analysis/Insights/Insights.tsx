// Redux connection
import { RootState } from "../../../state/store";
import { useSelector } from "react-redux";
// External Components
import { Card } from '@tremor/react';
// Own Components
import DataValues from './DataValues/DataValues';

function Insights() {
    // Obtain the current symptoms that are selected
    const selectedSymptoms = useSelector((state: RootState) => state.ui.selectedSymptoms);
    return (
        // Show the minimum value, the mean, and maximum value of all the data of the cart in two ways, on numeric values and on a graph
        <>
        {/* Map each symptom to a card */}
        {selectedSymptoms.map((symptom) => {
            return <Card
            // Flex to have the items together, and margin bottom to have white space at the end
                key={symptom}
                className="flex flex-col gap-4 p-4 mb-5 lg:flex-row" >
                <div className='w-full'>
                    <DataValues symptom={symptom} />
                </div>
            </Card>
        })}
        </>
    )
}

export default Insights