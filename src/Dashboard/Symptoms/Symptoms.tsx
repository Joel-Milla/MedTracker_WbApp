// External components
import { Card } from "@nextui-org/react";
// Components
import SearchBar from "./SearchBar/SearchBar";
import SymptomList from "./SymptomList/SymptomList";

function Symptoms() {
    return (
        <>
            <Card className="p-3 flex justify-center">
                <SearchBar />
                <SymptomList />
            </Card>
        </>
    )
}

export default Symptoms;