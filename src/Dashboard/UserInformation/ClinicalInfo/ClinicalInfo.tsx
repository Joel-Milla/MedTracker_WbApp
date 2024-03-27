// External components
import { Textarea } from "@nextui-org/react";

function ClinicalInfo() {
    // Mock data
    const placeholder = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\nParturient montes nascetur ridiculus mus mauris vitae. Vitae sapien pellentesque habitant morbi tristique. Fermentum iaculis eu non diam. A erat nam at lectus. Quam vulputate dignissim suspendisse in."
    return (
        <>
        {/* Show a read only text area with the clinical records of the patient */}
            <Textarea
                isReadOnly
                label="Antecedentes"
                variant="bordered"
                labelPlacement="outside"
                placeholder="Enter your description"
                color="primary"
                defaultValue={placeholder}
            />
        </>
    )
}

export default ClinicalInfo;