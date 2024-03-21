// Components
import Title from "./Header/Header";
import Symptoms from "./Symptoms/Symptoms";
import Analysis from "./Analysis/Analysis";
import UserInformation from "./UserInformation/UserInformation";

function Dashboard() {
    return (
        <>
            <div className='container mx-auto mb-10'>
                <Title />
                <div className="grid grid-cols-12 gap-3 justify-center mt-10">
                    <div className="col-span-3">
                        <Symptoms />
                    </div>
                    <div className="col-span-9">
                        <Analysis />
                        <UserInformation />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Dashboard;