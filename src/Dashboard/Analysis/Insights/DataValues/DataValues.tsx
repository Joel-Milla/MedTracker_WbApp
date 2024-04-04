// Redux connection
import { RootState } from '../../../../state/store';
import { useSelector } from "react-redux";
// Import util functions
import { getSymptomName, getInisightsValues } from "../../../../Utils/Utils";

function DataValues({symptom}: {symptom: string}) {
    // Obtain the current user data
    const registers = useSelector((state: RootState) => state.user.registers);
    const symptoms = useSelector((state: RootState) => state.user.symptoms);

    // Obtain the values to display on insights from the utils function
    const symptomName = getSymptomName(symptoms, symptom);
    const {min, mean, max} = getInisightsValues(registers, symptom);
    return (
        <>
            {/* Show the numeric values of min/mean/max of all the values of the chart */}
            <h2 className="text-2xl 2xl:text-4xl font-semibold">{symptomName}</h2>
            <div className="flex justify-around">
                {/* Apply to each card similar styles as symptomCard */}
                <div>
                    <h2 className="text-sm text-gray-500">Minimo</h2>
                    <p className="text-2xl 2xl:text-4xl font-semibold">{min.toFixed(2)}</p>
                </div>
                <div>
                    <h2 className="text-sm text-gray-500">Promedio</h2>
                    <p className="text-2xl 2xl:text-4xl font-semibold">{mean.toFixed(2)}</p>
                </div>
                <div>
                    <h2 className="text-sm text-gray-500">Maximo</h2>
                    <p className="text-2xl 2xl:text-4xl font-semibold">{max.toFixed(2)}</p>
                </div>
            </div>
        </>
    )
}

export default DataValues;