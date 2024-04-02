// External component
import { Card, CardHeader, CardBody, Divider } from "@nextui-org/react";
// Models
import { SymptomProps } from '../../../Models/dashboardModels';
import BlueDot from "./BlueDot";

function SymptomCard(properties: SymptomProps) {
    // Symptom that was passed in
    const { symptom } = properties;
    return (
        // Use a card to show the current symptoms, the last register, and to know if the symptom is being tracked and its type
        // Use margin of 1px to show the borders of the card
        <Card className="m-px">
            {/* Multiple rows using flex and align items to the start */}
            <CardHeader className="flex flex-col items-start">
                {/* Change size and color of text */}
                <h2 className="text-sm text-gray-500">Ultimo Registro: Feb 27</h2>
                <h1 className="text-2xl font-semibold">{symptom.nombre}</h1>
            </CardHeader>
            <Divider />
            <CardBody>
                {/* Flex to show in the same line with a gap between the items and use items-center for blue dot and text to be on the same line */}
                <div className="flex items-center gap-1">
                    {/* Show a blue dot to denote the different data */}
                    <BlueDot />
                    <p>{symptom.activo ? "Sintoma Activo" : "Sintoma Desactivado"}</p>
                </div>
                <div className="flex items-center gap-1">
                    <BlueDot />
                    <p>{symptom.cuantitativo ? "Sintoma Cuantitativo" : "Sintoma Cualitativo"}</p>
                </div>
            </CardBody>
        </Card>
    );
}

export default SymptomCard;