import { useSelector } from "react-redux";
import { RootState } from "./state/store";

// Delete this function, this is just to see the current user
function CurrentUser() {
  const currentUserEmail = useSelector(
    (state: RootState) => state.currentUser.currentUserEmail
  );
  const currentUserName = useSelector(
    (state: RootState) => state.currentUser.currentUserName
  );
  return (
    <>
      <div className="flex flex-col justify-center items-center w-full h-screen">
        <h1 className="text-4xl font-bold text-red-600">Current User Email:</h1>
        <h1 className="text-4xl font-bold text-red-600">{currentUserEmail}</h1>
        <h1 className="text-4xl font-bold text-red-600">Current User Name:</h1>
        <h1 className="text-4xl font-bold text-red-600">{currentUserName}</h1>
      </div>
    </>
  );
}

export default CurrentUser;
