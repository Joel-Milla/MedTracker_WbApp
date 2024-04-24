// Redux connection
import { RootState } from "../state/store";
import { useSelector } from "react-redux";
// External functions
import { signOut } from "firebase/auth";
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
  const handleClick = () => {
    signOut(auth);
  };

  // Get the current logged user
  const currentUserEmail = useSelector(
    (state: RootState) => state.currentUser.currentUserEmail
  );

  return (
    <Dropdown backdrop="blur">
      <DropdownTrigger>
        <Avatar
          isBordered
          radius="lg"
          src=""
          className="hover:cursor-pointer"
          // Show the initials of the name
          name={currentUserEmail}
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
