// External components
import { Card } from "@nextui-org/react";
// Components
import SearchBar from "./SearchBar/SearchBar";
import SymptomList from "./SymptomList/SymptomList";

function Symptoms() {
    return (
        <>
        {/* Search bar to select a symptom and all the list of symptoms */}
        {/* Use caard element to add border and shadow around section and use flex to align items as a column with multiple rows with a padding around elements*/}
            <Card className="flex flex-col p-3">
                <SearchBar />
                <SymptomList />
            </Card>
        </>
    )
}

export default Symptoms;