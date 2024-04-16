import HeaderProfile from "./HeaderProfile";
import ProfileField from "./ProfileField";
import ProfileButton from "./ProfileButon/ProfileButton";

import { useState } from "react";

function ProfilePage() {
  const [name, setName] = useState("Nombre");
  const [namePlaceholder, setNamePlaceholder] = useState("Nombre");
  const [email, setEmail] = useState("Correo");
  const [emailPlaceholder, setEmailPlaceholder] = useState("Correo");
  const [phone, setPhone] = useState("Teléfono");
  const [phonePlaceholder, setPhonePlaceholder] = useState("Teléfono");
  const [editable, setEditable] = useState(false);

  const handleEdit = () => {
    setNamePlaceholder(name);
    setEmailPlaceholder(email);
    setPhonePlaceholder(phone);
    setEditable(true);
  };

  const handleSave = () => {
    const newName = name === "" ? namePlaceholder : name;
    const newEmail = email === "" ? emailPlaceholder : email;
    const newPhone = phone === "" ? phonePlaceholder : phone;

    setName(newName);
    setEmail(newEmail);
    setPhone(newPhone);

    console.log(newName, newEmail, newPhone);
    setEditable(false);
  };

  return (
    <div className="container mx-auto mb-10 p-3">
      <HeaderProfile />
      <div className="grid grid-rows-4 gap-4">
        <ProfileField
          label="Nombre"
          value={name}
          placeholder={namePlaceholder}
          setValue={setName}
          editable={editable}
        />
        <ProfileField
          label="Correo"
          value={email}
          placeholder={emailPlaceholder}
          setValue={setEmail}
          editable={editable}
        />
        <ProfileField
          label="Teléfono"
          value={phone}
          placeholder={phonePlaceholder}
          setValue={setPhone}
          editable={editable}
        />
        <div className="grid grid-cols-2 gap-4">
          <ProfileButton value="Editar datos" onClick={handleEdit} />
          <ProfileButton value="Guardar cambios" onClick={handleSave} />
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
