import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Avatar } from "@nextui-org/react";

// Show the possible selections that the doctor can make
function UserInformation() {
    return (
        <Dropdown>
            <DropdownTrigger>
                    <Avatar
                        isBordered
                        radius="lg"
                        src=''
                        className="hover:cursor-pointer"
                        // Show the initials of the name
                        name='Doctor Oscar'
                        showFallback
                        color='primary'
                        size="lg"
                    />
            </DropdownTrigger>
            <DropdownMenu aria-label="Static Actions">
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