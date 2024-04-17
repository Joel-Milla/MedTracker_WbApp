// Redux connection
import { RootState } from "../../../../state/store";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedDateFilter } from "../../../../state/Slices/uiSlice"; // Action to save the
// External components
import { Tabs, Tab } from "@nextui-org/react";
import { Key, useState } from "react";

function DateFiltering() {
  // Initial state
  const initialSelection = useSelector(
    (state: RootState) => state.ui.selectedDateFilter
  );
  // Values that will handle the change of selected tabs
  const [selectedTab, setSelectedTabs] = useState(initialSelection);
  // Use this hook to dispatch actions to redux
  const dispatch = useDispatch();

  // Handles the change of tabs
  const handleSelectionChange = (key: Key) => {
    const selectedKeyTab = key.toString();
    setSelectedTabs(selectedKeyTab);
    dispatch(setSelectedDateFilter(selectedKeyTab));
  };

  // This are the titles that are displayed as tab items
  const titles = [
    {
      id: "30d",
      label: "Últimos 30 días",
    },
    {
      id: "6m",
      label: "Últimos 6 meses",
    },
    {
      id: "todos",
      label: "Todos los registros",
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

export default DateFiltering;
