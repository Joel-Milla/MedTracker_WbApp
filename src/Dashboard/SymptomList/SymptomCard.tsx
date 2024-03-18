// External component
import { Card, CardHeader, CardBody, Divider } from "@nextui-org/react";
// Models
import { SymptomProps } from '../DashboardModels/dashboardModels';

function SymptomCard(properties: SymptomProps) {
    const { symptom } = properties;
    return (
        <div className=" m-2">
            <Card>
                <CardHeader className=" grid grid-row-2">
                    <h2 className=" text-sm text-persian-green-700">Feb 27</h2>
                    <h1 className=" text-3xl">{symptom.nombre}</h1>
                </CardHeader>
                <Divider />
                <CardBody>
                    <div className="flex items-center space-x-4">
                        <div>
                            <p>{symptom.activo ? "Sintoma Activo" : "Sintoma Desactivado"}</p>
                        </div>
                        <Divider orientation="vertical" className="h-5 text-wrap" />
                        <div>
                            <p>{symptom.cuantitativo ? "Sintoma Cuantitativo" : "Sintoma Cualitativo"}</p>
                        </div>
                    </div>
                </CardBody>
            </Card>
        </div>
    );
}

export default SymptomCard;