// Components
import SymptomList from "./SymptomList/SymptomList";
import Graph from "./Analysis/Graph/Graph";

function Dashboard() {
    return (
        <>
            <div className='container mx-auto'>
                <div className="grid grid-cols-3 justify-center mx-auto mt-10">
                    <div className=" col-span-1">
                        <SymptomList />
                    </div>
                    <div className="col-span-2">
                        <Graph />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Dashboard;