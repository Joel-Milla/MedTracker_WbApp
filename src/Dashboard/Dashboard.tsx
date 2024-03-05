
// Components
import SymptomList from "./SymptomList/SymptomList";
// Mock Data
import USERS from "../assets/MockData/UsersData";

function Dashboard() {
    const user = USERS[1];
    return (
        <>
            <SymptomList />
        </>
    )
}

export default Dashboard;