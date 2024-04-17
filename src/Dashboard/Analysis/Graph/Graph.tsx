// Redux connection
import { RootState } from "../../../state/store";
import { useSelector } from "react-redux";
// External components
import { Skeleton } from "@nextui-org/react";
// Own components
import ModalButton from "./Chart/ModalButton";
import Data from "./Data/Data";

function Graph() {
  // Loading state
  const isLoading = useSelector((state: RootState) => state.user.isLoading);

  return (
    <>
      {/* Show two things on the graph, the chart and then the selected data when the user click on the graph */}
      <div className="flex flex-col gap-2">
        <div className="flex justify-end">
          <ModalButton />
        </div>
        <div>
          <Skeleton
            isLoaded={!isLoading}
            className="w-full rounded-lg bg-persian-green-500"
          >
            <Data />
          </Skeleton>
        </div>
      </div>
    </>
  );
}

export default Graph;
