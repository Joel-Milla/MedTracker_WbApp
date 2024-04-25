import { Button } from "@nextui-org/react";

interface ProfileButtonProps {
    onClick: () => void;
    value: string;
    bgColor?: string;
}

function ProfileButton({ onClick, value, bgColor }: ProfileButtonProps) {
    return (
        <Button
            onClick={onClick}
            className={`${bgColor} text-white font-semibold`}
        >
            {value}
        </Button>
    );
}

export default ProfileButton;
