// Own components
import SearchBar from "./SearchBar";
import UserInformation from "./UserInformation";
import Title from "../Dashboard/Header/Title/Title";

interface HeaderProps {
    cantidadPacientes: number;
}

function Header({ cantidadPacientes }: HeaderProps) {
    return (
        // Flex to expand the div 100% of container and align items as a column with multiple rows
        <div className="flex flex-col">
            {/* Add margins to clearly define the current user. Set same width as symptoms list based on screen size*/}
            <div className="flex items-center gap-3 mt-5 mb-9">
                <SearchBar />
                <UserInformation />
            </div>
            {/* Because of flex properties, expand the full width of container */}
            <div>
                <Title titulo="Pacientes" badge={cantidadPacientes} />
            </div>
        </div>
    );
}

export default Header;
