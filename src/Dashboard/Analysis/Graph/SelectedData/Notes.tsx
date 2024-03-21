import { Textarea } from "@nextui-org/react";

function Notes() {
    const placeholder = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\nParturient montes nascetur ridiculus mus mauris vitae. Vitae sapien pellentesque habitant morbi tristique. Fermentum iaculis eu non diam. A erat nam at lectus. Quam vulputate dignissim suspendisse in."
    return (
        <>
            <Textarea
                isReadOnly
                label="Notas del dia"
                variant="bordered"
                labelPlacement="outside"
                placeholder="Enter your description"
                color="primary"
                defaultValue={placeholder}
            />
        </>
    )
}

export default Notes;