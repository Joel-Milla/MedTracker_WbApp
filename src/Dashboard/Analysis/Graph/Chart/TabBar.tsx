// Redux connection
import { RootState } from "../../../../state/store";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedDataFilter } from "../../../../state/uiSlice"; // Action to save the 
// External components
import { Tabs, Tab } from "@nextui-org/react";
import { Key, useState } from "react";


function TabBar() {
    // Initial state
    const initialSelection = useSelector((state: RootState) => state.ui.selectedDataFilter);
    // Values that will handle the change of selected tabs
    const [selectedTab, setSelectedTabs] = useState(initialSelection);
    // Use this hook to dispatch actions to redux
    const dispatch = useDispatch();

    // Handles the change of tabs
    const handleSelectionChange = (key: Key) => {
        const selectedKeyTab = key.toString();
        setSelectedTabs(selectedKeyTab);
        dispatch(setSelectedDataFilter(selectedKeyTab));
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
        }
    ]
    return (
        <>
            <Tabs
                variant='bordered'
                aria-label="Tabs variants"
                color="primary"
                // Handle the change of data
                selectedKey={selectedTab}
                onSelectionChange={handleSelectionChange}
            >
                {/* Traverse all the titles and dispaly them as tab items */}
                {titles.map((title) =>
                    <Tab key={title.id} title={title.label} />)}
            </Tabs>
        </>
    )
}

export default TabBar;