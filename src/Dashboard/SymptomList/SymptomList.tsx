// External components
import { Listbox, ListboxItem } from "@nextui-org/react";
// Components
import SymptomCard from './SymptomCard';
// Models
import { Symptom } from "../DashboardModels/dashboardModels";
// Mock Data
import USERS from "../../assets/MockData/UsersData";

function SymptomList() {
    const currentUser = USERS[1];
    return (
        <>
            <div className="border-2 border-persian-green-500 rounded-lg max-w-96 p-2 mb-10">
            <h1 className=" text-4xl text-b-curious-blue-800 mb-5">Datos de Salud</h1>
                <Listbox
                    aria-label="Actions"
                    onAction={(key) => alert(key)} >
                    {currentUser.symptoms.map((symptom: Symptom) => {
                        return (
                            <ListboxItem key={symptom.id} color="primary" textValue={symptom.nombre}>
                                <SymptomCard symptom={symptom} />
                            </ListboxItem>
                        )
                    })}
                </Listbox>
            </div>
        </>
    )
}

export default SymptomList;