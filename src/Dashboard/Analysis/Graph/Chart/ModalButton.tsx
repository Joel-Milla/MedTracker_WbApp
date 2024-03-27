// External Components
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure } from "@nextui-org/react";
// Own components
import Chart from '../Chart/Chart';

function ModalButton() {
    const { isOpen, onOpen, onClose } = useDisclosure();


    const handleOpen = () => {
        onOpen();
    }

    return (
        <>
        {/* Show a button that handles when user click the button to open the graph and show the chart when the modal is open */}
            <div>
                <Button
                    key="full modal"
                    color="primary"
                    onPress={() => handleOpen()} >
                    Abrir grafica
                </Button>
            </div>
            <Modal
                size="full"
                isOpen={isOpen}
                onClose={onClose}
            >
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1">Test6t</ModalHeader>
                            <ModalBody>
                                <Chart />
                            </ModalBody>
                            <ModalFooter>
                                <Button color="danger" onPress={onClose}>
                                    Cerrar
                                </Button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>
    );
}

export default ModalButton;
