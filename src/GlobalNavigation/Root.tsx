import NavigationMenu from "./NavigationMenu";
import { Outlet } from "react-router-dom";

function Root() {
    return (
        <>
            <div className="flex">
                <NavigationMenu />
                <Outlet />
            </div>
        </>
    );
}

export default Root;