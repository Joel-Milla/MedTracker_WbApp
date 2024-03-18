// Components
import Title from "./Title/Title";
import SymptomList from "./SymptomList/SymptomList";
import MainAnalysis from "./Analysis/MainAnalysis/MainAnalysis";

function Dashboard() {
    return (
        <>
            <div className='container mx-auto'>
                <Title />
                <div className="grid grid-cols-3 justify-center mx-auto mt-10">
                    <div className=" col-span-1">
                        <SymptomList />
                    </div>
                    <div className="col-span-2">
                        <MainAnalysis />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Dashboard;