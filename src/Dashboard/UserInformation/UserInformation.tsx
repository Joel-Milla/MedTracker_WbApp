// External components
import { Card } from "@nextui-org/react";
// Components
import DelimiterPersianGreen from "../Header/Title/DelimiterPersianGreen";
import PersonalData from "./PersonalData/PersonalData";
import ClinicalInfo from "./ClinicalInfo/ClinicalInfo";

function UserInformation() {
    return (
        <>
            <Card className="mt-10 p-3">
            <div className='mb-5'>
                    {/* Bottom margin to separate the title and delimiter */}
                    <h3 className="text-2xl mb-2">Informacion de Paciente</h3>
                    {/* Show delimiter */}
                    <DelimiterPersianGreen />
                </div>
                <div className="flex flex-col gap-4 md:flex-row">
                    <div className="md:w-1/2 2xl:w-1/3">
                        <PersonalData />
                    </div>
                    <div className="w-full">
                        <ClinicalInfo />
                    </div>
                </div>
            </Card>
        </>
    );
}

export default UserInformation;