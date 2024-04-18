// Connection to redux
import { RootState } from "../../state/store";
import { useSelector } from "react-redux";
// External components
import { Card, Skeleton } from "@nextui-org/react";
// Components
import SearchBar from "./SearchBar/SearchBar";
import SymptomList from "./SymptomList/SymptomList";

function Symptoms() {
  // Loading state
  const isLoading = useSelector((state: RootState) => state.user.isLoading);
  return (
    <>
      {/* Search bar to select a symptom and all the list of symptoms */}
      {/* Use caard element to add border and shadow around section and use flex to align items as a column with multiple rows with a padding around elements*/}
      <Card className="flex flex-col p-3">
        <Skeleton
          isLoaded={!isLoading}
          className="rounded-lg bg-persian-green-500"
        >
          <SearchBar />
          <SymptomList />
        </Skeleton>
      </Card>
    </>
  );
}

export default Symptoms;
