import { Input } from "@nextui-org/react";

interface ProfileFieldProps {
  label: string;
  value: string;
  setValue: (value: string) => void;
  editable: boolean;
  placeholder: string;
}

function ProfileField({
  label,
  value,
  setValue,
  editable,
  placeholder,
}: ProfileFieldProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <div>
      <span className="text-lg font-semibold">{label}</span>
      <Input
        type="text"
        value={value}
        className="w-full"
        placeholder={placeholder}
        onChange={handleChange}
        isReadOnly={!editable}
      />
    </div>
  );
}

export default ProfileField;
