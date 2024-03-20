// External components
import { Card } from "@nextui-org/react";
// Components
import PersonalData from "./PersonalData/PersonalData";
import ClinicalInfo from "./ClinicalInfo/ClinicalInfo";

function UserInformation() {
    return (
        <>
            <Card className="grid grid-cols-12 mt-10 p-3 gap-4">
                <div className="col-span-3">
                    <PersonalData />
                </div>
                <div className="col-span-9">
                    <ClinicalInfo />
                </div>
            </Card>
        </>
    );
}

export default UserInformation;