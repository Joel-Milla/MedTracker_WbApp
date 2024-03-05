// Components
import Title from "./Title/Title";
import SymptomList from "./SymptomList/SymptomList";
import Analysis from "./Analysis/Analysis";
// Mock Data

function Dashboard() {
    return (
        <>
            <Title />
            <div className='container'>
                <div className='row gx4 mb-4'>
                    <SymptomList />
                    <Analysis />
                </div>
            </div>
        </>
    )
}

export default Dashboard;