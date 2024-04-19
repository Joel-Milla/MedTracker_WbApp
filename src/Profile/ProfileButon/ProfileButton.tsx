import { Button } from "@nextui-org/react";

interface EditButtonProps {
    onClick: () => void;
    value: string;
}

function EditButton({ onClick, value }: EditButtonProps) {
    return (
        <Button
            onClick={onClick}
            className="bg-primary text-white font-semibold"
        >
            {value}
        </Button>
    );
}

export default EditButton;
