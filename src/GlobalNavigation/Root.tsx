import NavigationMenu2_0 from "./NavigationMenu2_0";
import { Outlet } from "react-router-dom";

function Root() {
    return (
        <>
            <NavigationMenu2_0 />
            <Outlet />
        </>
    );
}

export default Root;