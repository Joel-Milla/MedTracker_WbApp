// External functions
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
// Own funcitons
import { auth } from "../state/FirebaseConfig/config";
// External components
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Avatar,
} from "@nextui-org/react";

// Show the possible selections that the doctor can make
function UserInformation() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/");
    signOut(auth);
  };
  return (
    <Dropdown backdrop="blur">
      <DropdownTrigger>
        <Avatar
          isBordered
          radius="lg"
          src=""
          className="hover:cursor-pointer"
          // Show the initials of the name
          name="Doctor Oscar"
          showFallback
          color="primary"
          size="lg"
        />
      </DropdownTrigger>
      <DropdownMenu aria-label="Static Actions" onAction={handleClick}>
        {/* <DropdownItem key="perfil">Perfil</DropdownItem>
                <DropdownItem key="notificaciones">Notificaciones</DropdownItem> */}
        <DropdownItem key="delete" className="text-danger" color="danger">
          Cerrar sesión
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}

export default UserInformation;
