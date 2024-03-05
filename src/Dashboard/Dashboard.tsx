// Components
import Title from "./Title/Title";
import SymptomList from "./SymptomList/SymptomList";
import MainAnalysis from "./Analysis/MainAnalysis/MainAnalysis";
import UserInformation from "./UserInformation/UserInformation";
function Dashboard() {
    return (
        <>
            <Title />
            <div className='container-fluid'>
                <div className='row gx4 mb-4'>
                    <SymptomList />
                    <MainAnalysis />
                    <UserInformation />
                </div>
            </div>
        </>
    )
}

export default Dashboard;