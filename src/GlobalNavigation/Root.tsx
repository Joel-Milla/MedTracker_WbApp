import NavigationMenu from "./NavigationMenu";
import { Outlet, useLocation } from "react-router-dom";

function Root() {
  const { pathname } = useLocation();
  const isAuthenticated =
    pathname == "/signup" || pathname == "/login" || pathname == "/"; // check if current user is in sign up, in the root
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
