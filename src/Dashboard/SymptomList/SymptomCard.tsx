// External libraries
import ListGroup from 'react-bootstrap/ListGroup';
import Card from 'react-bootstrap/Card';
// Models
import { SymptomProps } from '../DashboardModels/dashboardModels';
// Own styles
import styles from "./SymptomCard.module.css"

function SymptomCard(properties: SymptomProps) {
    const {symptom} = properties;
    // const symptomValues = Object.values(symptom)[0];
    return (
        <ListGroup.Item>
            <Card border="success">
                <Card.Body>
                    <Card.Title>{symptom.nombre}</Card.Title>
                    <Card.Subtitle>{symptom.fecha}</Card.Subtitle>
                    <div className={styles.text}>
                        <div>{symptom.activo ? "Activo": "Desactivado"}</div>
                        <div>|</div>
                        <div>{symptom.cuantitativo ? "Cuantitativo": "Cualitativo"}</div>
                    </div>
                </Card.Body>
            </Card>
        </ListGroup.Item>
    )
}

export default SymptomCard;