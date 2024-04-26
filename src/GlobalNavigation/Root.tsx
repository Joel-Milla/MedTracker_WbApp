// Redux connectinos
import { RootState } from "../state/store";
import { useSelector, useDispatch } from "react-redux";
// External functions
import { onAuthStateChanged } from "firebase/auth";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
// Own functions
import {
  setCurrentUserEmail,
  setCurrentUserName,
} from "../state/Slices/currentUserSlice";
import { auth } from "../state/FirebaseConfig/config";
// External components
import { Spinner } from "@nextui-org/react";
// Own components
import NavigationMenu from "./NavigationMenu";

function Root() {
  // Obtain the current logged user
  const currentUserEmail = useSelector(
    (state: RootState) => state.currentUser.currentUserEmail
  );
  const { pathname } = useLocation();
  const isOnAuthViews =
    pathname == "/signup" || pathname == "/login" || pathname == "/"; // check if current user is in sign up, in the root

  // Loading state to now show the bad route
  const [loading, setLoading] = useState(true);
  // The next function is for a listener during the whole application to check if the user changed
  // Variable to navigate between views
  const navigate = useNavigate();
  // To dispatch information
  const dispatch = useDispatch();
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log(user);
        // User is signed in
        dispatch(setCurrentUserEmail(user.email ?? ""));
        dispatch(setCurrentUserName(user.displayName ?? ""));
        navigate("/pacientes");
      } else {
        // User is signed out
        console.log(user);
        dispatch(setCurrentUserEmail(""));
        dispatch(setCurrentUserName(""));
        navigate("/");
      }
      setLoading(false);
    });

    return unsubscribe;
  }, [dispatch, navigate]);

  // Make a check if the user is trying to access other routes without permission
  if (!currentUserEmail && !isOnAuthViews) {
    navigate("/");
  }

  // If is still loading, just show another view of loading state
  if (loading) {
    return (
      <>
        <div className="flex justify-center items-center w-full h-screen">
          <Spinner label="Cargando..." color="primary" />
        </div>
      </>
    );
  }
  return (
    <>
      {/* Don't show the sidebar when you are on authentication */}
      {isOnAuthViews && <Outlet />}
      {!isOnAuthViews && (
        <div className="flex">
          <NavigationMenu />
          <Outlet />
        </div>
      )}
    </>
  );
}

export default Root;
