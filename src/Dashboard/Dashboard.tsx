// Components
import Title from "./Title/Title";
import SymptomList from "./SymptomList/SymptomList";
import MainAnalysis from "./Analysis/MainAnalysis/MainAnalysis";
import UserInformation from "./UserInformation/UserInformation";


function Dashboard() {
    return (
        <>
            <div className='container mx-auto'>
                <SymptomList/>
            </div>
        </>
    )
}

export default Dashboard;