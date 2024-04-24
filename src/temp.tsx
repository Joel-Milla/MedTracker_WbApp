import { useSelector } from "react-redux";
import { RootState } from "./state/store";

// Delete this function, this is just to see the current user
function CurrentUser() {
  const currentUser = useSelector(
    (state: RootState) => state.currentUser.currentUser
  );
  return (
    <>
      <div className="flex flex-col justify-center items-center w-full h-screen">
        <h1 className="text-4xl font-bold text-red-600">Current User:</h1>
        <h1 className="text-4xl font-bold text-red-600">{currentUser}</h1>
      </div>
    </>
  );
}

export default CurrentUser;
