import { Button } from "@nextui-org/react";

interface EditButtonProps {
    onClick: () => void;
    value: string;
}

function EditButton({ onClick, value }: EditButtonProps) {
    return (
        <Button onClick={onClick} style={{ backgroundColor: "white" }}>
            {value}
        </Button>
    );
}

export default EditButton;
