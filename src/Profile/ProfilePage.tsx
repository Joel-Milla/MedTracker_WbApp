// Components
import HeaderProfile from "./HeaderProfile";
import ProfileField from "./ProfileField";
import ProfileButton from "./ProfileButton";

// Hooks
import { useState } from "react";

// Redux connection
import { RootState } from "../state/store";
import { useSelector, useDispatch } from "react-redux";
import {
    selectName,
    selectPhone,
    selectEmail,
    setName,
    setEmail,
    setPhone,
} from "../state/Slices/doctorSlice";

import { Input } from "@nextui-org/react";

function ProfilePage() {
    const name = useSelector((state: RootState) => selectName(state));
    const email = useSelector((state: RootState) => selectEmail(state));
    const phone = useSelector((state: RootState) => selectPhone(state));
    const dispatch = useDispatch();

    const [currentName, setCurrentName] = useState(name);
    const [namePlaceholder, setNamePlaceholder] = useState("Nombre");
    const [currentEmail, setCurrentEmail] = useState(email);
    const [emailPlaceholder, setEmailPlaceholder] = useState("Correo");
    const [currentPhone, setCurrentPhone] = useState(phone);
    const [phonePlaceholder, setPhonePlaceholder] = useState("Teléfono");
    const [editable, setEditable] = useState(false);

    // Cuando se editan los campos, se guarda en los placeholders el valor actual
    // para que le sirva de referencia al usuario
    const handleEdit = () => {
        if (!editable) {
            setNamePlaceholder(name);
            setEmailPlaceholder(email);
            setPhonePlaceholder(phone);
            setEditable(true);
        }
    };

    // Cuando se guarda los cambios, se verifica si los campos están vacíos, de
    // estarlos, se asigna el valor del placeholder, que era el valor previo a la
    // edición. Si no, se asigna el valor actual. Se vuelven los
    const handleSave = () => {
        if (editable) {
            const newName = currentName === "" ? namePlaceholder : currentName;
            const newEmail =
                currentEmail === "" ? emailPlaceholder : currentEmail;
            const newPhone =
                currentPhone === "" ? phonePlaceholder : currentPhone;

            setCurrentName(newName);
            setCurrentEmail(newEmail);
            setCurrentPhone(newPhone);

            dispatch(setName(newName));
            dispatch(setEmail(newEmail));
            dispatch(setPhone(newPhone));

            setEditable(false);
        }
    };

    return (
        <div className="container mx-auto mb-10 p-3">
            <HeaderProfile />
            <div className="grid grid-rows-4 gap-4">
                <ProfileField
                    label="Nombre"
                    value={currentName}
                    placeholder={namePlaceholder}
                    setValue={setCurrentName}
                    editable={editable}
                />
                <ProfileField
                    label="Correo"
                    value={currentEmail}
                    placeholder={emailPlaceholder}
                    setValue={setCurrentEmail}
                    editable={editable}
                />
                <ProfileField
                    label="Teléfono"
                    value={currentPhone}
                    placeholder={phonePlaceholder}
                    setValue={setCurrentPhone}
                    editable={editable}
                />
                <div className="grid grid-cols-2 gap-4">
                    <ProfileButton
                        value="Editar datos"
                        bgColor="bg-primary"
                        onClick={handleEdit}
                    />
                    <ProfileButton
                        value="Guardar cambios"
                        bgColor="bg-primary"
                        onClick={handleSave}
                    />
                </div>
                <ProfileButton
                    value="Cerrar sesión"
                    bgColor="bg-red-500"
                    onClick={() => alert("Cerrando sesión...")}
                />
            </div>
        </div>
    );
}

export default ProfilePage;
