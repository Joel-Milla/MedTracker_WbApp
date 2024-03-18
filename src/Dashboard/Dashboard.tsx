// Components
import SymptomList from "./SymptomList/SymptomList";


function Dashboard() {
    return (
        <>
            <div className='container mx-auto'>
                <div className="grid grid-cols-1 md:grid-cols-2 justify-center gap-4 mx-auto mt-10">
                    <SymptomList />
                </div>
            </div>
        </>
    )
}

export default Dashboard;