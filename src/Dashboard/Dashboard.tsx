// Components
import Header from "./Header/Header";
import Symptoms from "./Symptoms/Symptoms";
import Analysis from "./Analysis/Analysis";
import UserInformation from "./UserInformation/UserInformation";

function Dashboard() {
    return (
        <>
        {/* Show the three main parts of the dashboard, the title that contains the current user, the list of symptoms with the graph to see the symptom selected and then the current information of the user.  */}
            <div className='container mx-auto mb-10'>
                <Header />
                <div className="flex flex-col gap-3 justify-center mt-10 sm:grid sm:grid-cols-12">
                    <div className="sm:col-span-5 md:col-span-4 lg:col-span-3">
                        <Symptoms />
                    </div>
                    <div className="sm:col-span-7 md:col-span-8 lg:col-span-9">
                        <Analysis />
                        <UserInformation />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Dashboard;