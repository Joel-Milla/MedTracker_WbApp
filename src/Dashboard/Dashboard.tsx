// Redux connection
import { RootState } from "../state/store";
import { useDispatch, useSelector } from "react-redux";
import { fetchPatientInformation } from "../state/Slices/userSlice";
// Components
import Header from "./Header/Header";
import Symptoms from "./Symptoms/Symptoms";
import Analysis from "./Analysis/Analysis";
import UserInformation from "./UserInformation/UserInformation";
import { useEffect } from "react";

function Dashboard() {
  const selectedPatient = useSelector(
    (state: RootState) => state.user.selectedPatient
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPatientInformation(selectedPatient));
  });

  return (
    <>
      {/* Show the three main parts of the dashboard, the title that contains the current user, the list of symptoms with the graph to see the symptom selected and then the current information of the user.  */}
      {/* Container to limit the size, mx-auto to center the div and marginBottom of 10 to have white space at the end */}
      {/* Add padding for display to not cover fully the view */}
      <div className="container mx-auto mb-10 p-3">
        <Header />
        {/* Flex to have them in same row and have it expanded full parent size*/}
        <div className="flex flex-col gap-3 mt-5 md:flex-row">
          {/* Responsive width depending on screen size */}
          <div className="md:w-1/3 2xl:w-1/4">
            <Symptoms />
          </div>
          {/* Expand the dashboard the all the available width */}
          <div className="w-full">
            <Analysis />
            <UserInformation />
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
