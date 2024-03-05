// Components
import Title from "./Title/Title";
import SymptomList from "./SymptomList/SymptomList";
import MainAnalysis from "./Analysis/MainAnalysis";

function Dashboard() {
    return (
        <>
            <Title />
            <div className='container'>
                <div className='row gx4 mb-4'>
                    <SymptomList />
                    <MainAnalysis />
                </div>
            </div>
        </>
    )
}

export default Dashboard;