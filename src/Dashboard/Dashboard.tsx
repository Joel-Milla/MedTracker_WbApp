// Components
import Title from "./Title/Title";
import SymptomList from "./SymptomList/SymptomList";
import MainAnalysis from "./Analysis/MainAnalysis/MainAnalysis";
import UserInformation from "./UserInformation/UserInformation";

import USERS from "../assets/MockData/UsersData";

function Dashboard() {
    const testObject = [{}];

    const user = Object.values(USERS[1])[0];
    const symptomsArray = user?.symptoms ? user.symptoms : testObject;
    return (
        <>
            <Title />
            <div className='container-fluid'>
                <div className='row gx4 mb-4'>
                    <SymptomList symptoms={symptomsArray} />
                    <MainAnalysis />
                    <UserInformation />
                </div>
            </div>
        </>
    )
}

export default Dashboard;