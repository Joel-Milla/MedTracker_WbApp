// External Components
import { LineChart } from '@tremor/react';
// Redux connection
import { RootState } from '../../../../state/store';
import { useDispatch, useSelector } from "react-redux";
import { setSelectedDataPoint } from '../../../../state/uiSlice'; // Action to save a data point
// Types/models
import { Register, Symptom } from '../../../../Models/Symptom_Register';
// Utils functions
import { timestampToDate, dateToString } from '../../../../Utils/Utils';

// Obtain the name of a symptom based on its id
const getSymptomName = (symptoms: Symptom[], idSymptom: string): string => {
    // Obtain the symptom that matched
    const symptom: Symptom | undefined = symptoms.find((symptom) => symptom.id == idSymptom);
    const symptomName = symptom?.nombre ?? 'Sin definir'
    return symptomName;
}

// Obtain a list of symptoms after being filtered by date
const filterRegisters = (registers: Register[], key: string): Register[] => {
    // Array that will contain the filtered symptoms
    const filteredRegisters: Register[] = [];

    if (key == '30d') {
        // Data used for comparison
        const thirtyDaysAgo = new Date();
        thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);

        // Validate if the register is in the range
        for (const register of registers) {
            const date = timestampToDate(register.fecha);
            if (date >= thirtyDaysAgo) {
                filteredRegisters.push(register);
            }
        }

        return filteredRegisters;
    } else if (key == '6m') {
        // Data used for comparison
        const today = new Date();
        const sixMonthsAgo = new Date(today);
        sixMonthsAgo.setMonth(sixMonthsAgo.getMonth() - 6);

        // Validate if the register is in the range
        for (const register of registers) {
            const date = timestampToDate(register.fecha);
            if (date >= sixMonthsAgo) {
                filteredRegisters.push(register);
            }
        }

        return filteredRegisters;
    }
    return registers;
} 

// Return a map that has the date as a string and 
const createData = (registers: Register[], symptoms: Symptom[], selectedSymptoms: string[], selectedTab: string): any[] => {
    // Initialize a map that has the date as string and a value of any
    const dateDataMap = new Map<string, any>();
    // Obtain the registers filter
    const filteredRegisters = filterRegisters(registers, selectedTab);

    // Obtain a map that has the date as a string as key and values of the symptoms
    for (const register of filteredRegisters) {
        // First check if the register has valid symptom
        if (selectedSymptoms.includes(register.idSymptom)) {
            // Obtain the date and transform it to string
            const date = timestampToDate(register.fecha);
            const stringDate = dateToString(date);
            const existingData = dateDataMap.get(stringDate);

            // Obtain the symptom that matched
            const symptomName = getSymptomName(symptoms, register.idSymptom);

            // Add the data to the object when it doesnt have that date string
            if (!existingData) {
                // When no symptom exists, adds the symptom to the data point and add the note of the day
                const symptomData = {
                    longDate: date,
                    date: stringDate,
                    [symptomName]: register.cantidad,
                    [`${symptomName}_note`]: register.notas,
                }
                dateDataMap.set(stringDate, symptomData);
            } else {
                // Add to the existing object the symptom, the amount and the notes of that day
                const amount = register.cantidad;
                existingData[symptomName] = amount;
                existingData[`${symptomName}_note`] = register.notas;
            }
        }
    }

    // Save all the values of the map into an array
    const values = Array.from(dateDataMap.values());

    // Sort the values of the array depending on the value of 'date'
    const sortedArray = values.sort((a, b) => a.longDate - b.longDate);

    // Obtain an array with all the object keys except the longDate which is the date 'Feb 11 11:20 Hemisphere...'
    const data = sortedArray.map(({ longDate, ...rest }) => rest);

    return data;
}


function Chart() {
    // Obtain the selected tab of TabBar.tsx
    const selectedTab = useSelector((state: RootState) => state.ui.selectedDataFilter);
    // Obtain the current user data
    const registers = useSelector((state: RootState) => state.user.registers);
    // Obtain the current user data
    const symptoms = useSelector((state: RootState) => state.user.symptoms);
    // Get the current selected sypmtoms
    const selectedSymptoms = useSelector((state: RootState) => state.ui.selectedSymptoms);
    const selectedSymptomNames = selectedSymptoms.map((symptomId) => getSymptomName(symptoms, symptomId));

    // Logic to update information on app
    // Use this hook to dispatch actions to redux
    const dispatch = useDispatch();

    // Function that handles when a user clicks a data point on the chart to save it globally
    const handleOnValueChange = (dataPoint: any) => {
        dispatch(setSelectedDataPoint(dataPoint));
    }


    // Obtain and map the new data
    const data = createData(registers, symptoms, selectedSymptoms, selectedTab);

    // Define all the possible colors
    const colors = ['red', 'cyan', 'amber', 'purple', 'lime', 'violet', 'orange', 'teal', 'yellow', 'indigo', 'green', 'pink', 'emerald', 'rose', 'sky', 'fuchsia', 'blue', 'stone', 'zinc', 'neutral']
    return (
        // Use lineChart from tremoUI to show a graph
        // There are two different components of charts, one where the graph shows for mobile devices and the other that shows for larger screens. 
        // Throws a warning of 'width(0) and height(0)' because the chart is hidden and has no width of xy axis.
        <>
            {/* PC chart */}
            <LineChart
                data={data}
                index="date" // Tells which piece of data is used for xaxis
                categories={selectedSymptomNames} // what category values are used to show in the chart
                colors={colors}
                onValueChange={handleOnValueChange}
                className="mt-6 hidden h-96 sm:block"
                noDataText='No hay datos registrados'
                showAnimation={true}
                enableLegendSlider={true}
                showGridLines={true}
            />
            {/* Mobile chart */}
            <LineChart
                data={data}
                index="date"
                categories={selectedSymptomNames}
                colors={colors}
                showYAxis={false}
                showLegend={false}
                startEndOnly={true}
                className="mt-6 h-72 sm:hidden"
                noDataText='No hay datos registrados'
            />

        </>
    );
}

export default Chart;