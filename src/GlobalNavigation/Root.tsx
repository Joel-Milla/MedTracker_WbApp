// Redux connectinos
import { useDispatch } from "react-redux";
// External functions
import { onAuthStateChanged } from "firebase/auth";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
// Own functions
import { setCurrentUser } from "../state/Slices/currentUserSlice";
import { auth } from "../state/FirebaseConfig/config";
// Own components
import NavigationMenu from "./NavigationMenu";

function Root() {
  const { pathname } = useLocation();
  const isAuthenticated =
    pathname == "/signup" || pathname == "/login" || pathname == "/"; // check if current user is in sign up, in the root
  // Variable to navigate between views
  const navigate = useNavigate();
  // To dispatch information
  const dispatch = useDispatch();
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log(user);
        // User is signed in
        dispatch(setCurrentUser(user.email ?? ""));
        navigate("/pacientes");
      } else {
        // User is signed out
        console.log(user);
        dispatch(setCurrentUser(""));
        navigate("/");
      }
    });

    return unsubscribe;
  }, []);
  return (
    <>
      {/* Don't show the sidebar when you are on authentication */}
      {isAuthenticated && <Outlet />}
      {!isAuthenticated && (
        <div className="flex">
          <NavigationMenu />
          <Outlet />
        </div>
      )}
    </>
  );
}

export default Root;
