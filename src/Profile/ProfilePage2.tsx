// Redux connection
import { RootState } from "../state/store";
import { useSelector } from "react-redux";
// External functions
import { signOut } from "firebase/auth";
// Own funcitons
import { auth } from "../state/FirebaseConfig/config";
// External Components
import { Input, Button } from "@nextui-org/react";
// Own Components
import Title from "../Dashboard/Header/Title/Title";

function ProfilePage2() {
  const currentUserEmail = useSelector(
    (state: RootState) => state.currentUser.currentUserEmail
  );
  const currentUserName = useSelector(
    (state: RootState) => state.currentUser.currentUserName
  );

  return (
    <div className="container mx-auto p-3">
      <Title titulo="Perfil" />
      <div className="flex flex-col gap-6 mt-10">
        <Input
          type="text"
          value={currentUserEmail}
          label="Email"
          color="primary"
          isReadOnly={true}
        />
        <Input
          type="text"
          value={currentUserName}
          label="Nombre"
          color="primary"
          isReadOnly={true}
        />
        <Button color="danger" onPress={() => signOut(auth)}>
          Cerrar Sesión
        </Button>
      </div>
    </div>
  );
}

export default ProfilePage2;
