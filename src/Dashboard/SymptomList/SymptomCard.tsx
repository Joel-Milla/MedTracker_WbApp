// External libraries
import ListGroup from 'react-bootstrap/ListGroup';
import Card from 'react-bootstrap/Card';
// Own styles
import styles from "./SymptomCard.module.css"

const SINTOMA = {
    "189D70BE-CC59-45E7-8E41-E43CBC6CD8CD": {
        "fecha": "February 11, 2024 at 1:50:59 PM UTC-6",
        "color": "#007AFF",
        "cuantitativo": false,
        "unidades": "",
        "icon": "44.square.fill",
        "description": "6",
        "id": "189D70BE-CC59-45E7-8E41-E43CBC6CD8CD",
        "nombre": "Test6t",
        "notificacion": "",
        "activo": true
    }
}

function SymptomCard() {
    const sintoma = SINTOMA['189D70BE-CC59-45E7-8E41-E43CBC6CD8CD'];
    return (
        <ListGroup.Item>
            <Card border="success">
                <Card.Body>
                    <Card.Title>{sintoma.nombre}</Card.Title>
                    <Card.Subtitle>{sintoma.fecha}</Card.Subtitle>
                    <div className={styles.text}>
                        <div>{sintoma.activo ? "Activo": "Desactivado"}</div>
                        <div>|</div>
                        <div>{sintoma.cuantitativo ? "Cuantitativo": "Cualitativo"}</div>
                    </div>
                </Card.Body>
            </Card>
        </ListGroup.Item>
    )
}

export default SymptomCard;