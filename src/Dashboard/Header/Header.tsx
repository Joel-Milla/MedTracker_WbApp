// Redux connection
import { RootState } from "../../state/store";
import { useSelector } from "react-redux";
// Own components
import CurrentPatient from "./CurrentPatient/CurrentPatient";
import UserInformation from "../../Pacientes/UserInformation";
import Title from "./Title/Title";

function Header() {
    // Obtain the current user symptoms
    const symptoms = useSelector((state: RootState) => state.user.patientData.symptoms);

    return (
        // Flex to expand the div 100% of container and align items as a column with multiple rows
        <div className="flex flex-col">
            {/* Add margins to clearly define the current user. Set same width as symptoms list based on screen size*/}
            <div className="flex items-center gap-3 mt-5 mb-9">
                <CurrentPatient />
                <UserInformation />
            </div>
            {/* Because of flex properties, expand the full width of container */}
            <div>
                <Title titulo="Datos de salud" badge={symptoms.length}/>
            </div>
        </div>
    );
}

export default Header;
