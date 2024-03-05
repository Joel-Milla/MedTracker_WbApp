// Components
import Title from "./Title/Title";
import SymptomList from "./SymptomList/SymptomList";
// Mock Data
import USERS from "../assets/MockData/UsersData";

function Dashboard() {
    const user = USERS[1];
    return (
        <>
            <Title />
            <div className='container'>
                <div className='row gx4'>
                    <SymptomList />
                </div>
            </div>
        </>
    )
}

export default Dashboard;