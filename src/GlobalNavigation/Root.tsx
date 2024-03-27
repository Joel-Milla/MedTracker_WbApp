import NavigationMenu2_0 from "./NavigationMenu2_0";
import { Outlet } from "react-router-dom";

function Root() {
    return (
        <>
            <div className="flex">
                <NavigationMenu2_0 />
                <Outlet />
            </div>
        </>
    );
}

export default Root;