// Components
import Title from "./Title/Title";
import Symptoms from "./Symptoms/Symptoms";
import MainAnalysis from "./Analysis/MainAnalysis/MainAnalysis";

function Dashboard() {
    return (
        <>
            <div className='container mx-auto'>
                <Title />
                <div className="grid grid-cols-12  gap-3 justify-center mx-auto mt-10">
                    <div className="col-span-3">
                        <Symptoms />
                    </div>
                    <div className="col-span-9">
                        <MainAnalysis />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Dashboard;