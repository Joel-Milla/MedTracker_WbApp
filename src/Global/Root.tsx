import NavigationMenu from "./NavigationMenu";
import { Outlet } from "react-router-dom";
function Root() {
    return (
        <>
        <div className="flex flex-row">
            <NavigationMenu />
            <Outlet />
        </div>
        </>
    );
}

export default Root;