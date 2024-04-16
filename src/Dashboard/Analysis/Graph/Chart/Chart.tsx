// External Components
import { BarChart, AreaChart } from "@tremor/react";
// Redux connection
import { RootState } from "../../../../state/store";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedDataPoint } from "../../../../state/Slices/uiSlice"; // Action to save a data point
// Types/models
import { Register, Symptom } from "../../../../Models/Symptom_Register";
// Utils functions
import {
  timestampToDate,
  dateToString,
  getSymptomName,
  filterRegistersByDate,
} from "../../../../Utils/Utils";

// Return a map that has the date as a string and
const createData = (
  registers: Register[],
  symptoms: Symptom[],
  selectedSymptoms: string[],
  selectedDateFilter: string
): any[] => {
  // Initialize a map that has the date as string and a value of any
  const dateDataMap = new Map<string, any>();
  // Obtain the registers filter
  const filteredRegisters = filterRegistersByDate(
    registers,
    selectedDateFilter
  );

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
        };
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
};

function Chart() {
  // Obtain the selected tab of DateFilter and the type of graph
  const selectedDateFilter = useSelector(
    (state: RootState) => state.ui.selectedDateFilter
  );
  const selectedChart = useSelector(
    (state: RootState) => state.ui.selectedChart
  );
  // Obtain the current user data
  const registers = useSelector(
    (state: RootState) => state.user.patientData.registers
  );
  const symptoms = useSelector(
    (state: RootState) => state.user.patientData.symptoms
  );
  // Get the current selected sypmtoms
  const selectedSymptoms = useSelector(
    (state: RootState) => state.ui.selectedSymptoms
  );
  const selectedSymptomNames = selectedSymptoms.map((symptomId) =>
    getSymptomName(symptoms, symptomId)
  );

  // Logic to update information on app
  // Use this hook to dispatch actions to redux
  const dispatch = useDispatch();

  // Function that handles when a user clicks a data point on the chart to save it globally
  const handleOnValueChange = (dataPoint: any) => {
    dispatch(setSelectedDataPoint(dataPoint));
  };

  // Obtain and map the new data
  const data = createData(
    registers,
    symptoms,
    selectedSymptoms,
    selectedDateFilter
  );

  // Define all the possible colors
  // The first two colors are the medTracker colors, this works after modifying the tailwind.config inside the safelist
  const colors = [
    "#009C8C",
    "red",
    "#19A7CE",
    "amber",
    "cyan",
    "purple",
    "lime",
    "violet",
    "orange",
    "teal",
    "yellow",
    "indigo",
    "green",
    "pink",
    "emerald",
    "rose",
    "sky",
    "fuchsia",
    "blue",
    "stone",
    "zinc",
    "neutral",
  ];

  // Render depending on the selection of the user a bar chart or line chart
  if (selectedChart == "line") {
    return (
      // Use lineChart from tremoUI to show a graph
      // There are two different components of charts, one where the graph shows for mobile devices and the other that shows for larger screens.
      // Throws a warning of 'width(0) and height(0)' because the chart is hidden and has no width of xy axis.
      <>
        {/* PC chart */}
        <AreaChart
          data={data}
          index="date" // Tells which piece of data is used for xaxis
          categories={selectedSymptomNames} // what category values are used to show in the chart
          onValueChange={handleOnValueChange}
          curveType="monotone"
          noDataText="No hay datos registrados"
          colors={colors}
          className="hidden h-96 sm:block"
          showAnimation={true}
          yAxisWidth={55}
        />
        {/* Mobile chart */}
        <AreaChart
          data={data}
          index="date"
          categories={selectedSymptomNames}
          onValueChange={handleOnValueChange}
          curveType="monotone"
          noDataText="No hay datos registrados"
          colors={colors}
          className="h-72 sm:hidden"
          showYAxis={false}
          startEndOnly={true}
        />
      </>
    );
  } else if (selectedChart == "bar") {
    return (
      <>
        {/* PC chart */}
        <BarChart
          data={data}
          index="date" // Tells which piece of data is used for xaxis
          categories={selectedSymptomNames} // what category values are used to show in the chart
          onValueChange={handleOnValueChange}
          noDataText="No hay datos registrados"
          colors={colors}
          className="hidden h-96 sm:block"
          showAnimation={true}
          yAxisWidth={55}
        />
        {/* Mobile chart */}
        <BarChart
          data={data}
          index="date"
          categories={selectedSymptomNames}
          onValueChange={handleOnValueChange}
          noDataText="No hay datos registrados"
          colors={colors}
          className="h-72 sm:hidden"
          showYAxis={false}
          startEndOnly={true}
        />
      </>
    );
  }
}

export default Chart;
