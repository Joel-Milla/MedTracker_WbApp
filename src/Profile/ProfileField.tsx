import { Input } from "@nextui-org/react";

interface ProfileFieldProps {
  label: string;
  value?: string;
}

function ProfileField({ label, value }: ProfileFieldProps) {
  return (
    <div>
      <span>{label}</span>
      <Input
        value={value}
        className="w-full"
        placeholder="No disponible"
        contentEditable={true}
      />
    </div>
  );
}

export default ProfileField;
