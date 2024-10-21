// Redux connection
import { RootState } from "../../../../state/store";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedChart } from "../../../../state/Slices/uiSlice"; // Action to save the
// External components
import { Tabs, Tab } from "@nextui-org/react";
import { Key, useState } from "react";

function ChartFiltering() {
  // Initial state
  const initialSelection = useSelector(
    (state: RootState) => state.ui.selectedChart
  );
  // Values that will handle the change of selected tabs
  const [selectedTab, setSelectedTabs] = useState(initialSelection);
  // Use this hook to dispatch actions to redux
  const dispatch = useDispatch();

  // Handles the change of tabs
  const handleSelectionChange = (key: Key) => {
    const selectedKeyTab = key.toString();
    setSelectedTabs(selectedKeyTab);
    dispatch(setSelectedChart(selectedKeyTab));
  };

  // This are the titles that are displayed as tab items
  const titles = [
    {
      id: "line",
      label: "Gráfica de línea",
    },
    {
      id: "bar",
      label: "Gráfica de barras",
    },
  ];
  return (
    <>
      <div className="hidden md:block">
        <Tabs
          variant="bordered"
          aria-label="Tabs variants"
          color="primary"
          // Handle the change of data
          selectedKey={selectedTab}
          onSelectionChange={handleSelectionChange}
        >
          {/* Traverse all the titles and dispaly them as tab items */}
          {titles.map((title) => (
            <Tab key={title.id} title={title.label} />
          ))}
        </Tabs>
      </div>
      <div className="block md:hidden">
        <Tabs
          variant="bordered"
          aria-label="Tabs variants"
          color="primary"
          size="sm"
          // Handle the change of data
          selectedKey={selectedTab}
          onSelectionChange={handleSelectionChange}
        >
          {/* Traverse all the titles and dispaly them as tab items */}
          {titles.map((title) => (
            <Tab key={title.id} title={title.label} />
          ))}
        </Tabs>
      </div>
    </>
  );
}

export default ChartFiltering;
