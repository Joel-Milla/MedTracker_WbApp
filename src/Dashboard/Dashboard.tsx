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
                <div className="flex flex-col gap-3 justify-center mt-10 md:grid md:grid-cols-12">
                    <div className="md:col-span-4 lg:col-span-3">
                        <Symptoms />
                    </div>
                    <div className="md:col-span-8 lg:col-span-9">
                        <Analysis />
                        <UserInformation />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Dashboard;