// External components
import { Card } from "@nextui-org/react";
// Components
import PersonalData from "./PersonalData/PersonalData";
import ClinicalInfo from "./ClinicalInfo/ClinicalInfo";

function UserInformation() {
    return (
        <>
            <Card className="flex flex-col mt-10 p-3 gap-7 lg:grid lg:grid-cols-12">
                <div className="lg:col-span-3">
                    <PersonalData />
                </div>
                <div className="lg:col-span-9">
                    <ClinicalInfo />
                </div>
            </Card>
        </>
    );
}

export default UserInformation;