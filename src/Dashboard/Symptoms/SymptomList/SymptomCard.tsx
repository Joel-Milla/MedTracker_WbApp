// External component
import { Card, CardHeader, CardBody, Divider } from "@nextui-org/react";
// Models
import { SymptomProps } from '../../DashboardModels/dashboardModels';
import BlueDot from "./BlueDot";

function SymptomCard(properties: SymptomProps) {
    const { symptom } = properties;
    return (
        <div className="mx-1 my-px">
            <Card>
                <CardHeader className="grid grid-row-2">
                    <h2 className="text-tremor-default text-tremor-content">Ultimo Registro: Feb 27</h2>
                    <h1 className=" text-tremor-metric font-semibold">{symptom.nombre}</h1>
                </CardHeader>
                <Divider />
                <CardBody>
                    <div>
                        <div className="flex gap-1 items-center">
                            <BlueDot />
                            <p>{symptom.activo ? "Sintoma Activo" : "Sintoma Desactivado"}</p>
                        </div>
                        <div className="flex gap-1 items-center">
                            <BlueDot />
                            <p>{symptom.cuantitativo ? "Sintoma Cuantitativo" : "Sintoma Cualitativo"}</p>
                        </div>
                    </div>
                </CardBody>
            </Card>
        </div>
    );
}

export default SymptomCard;