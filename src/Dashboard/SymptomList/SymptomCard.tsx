// External libraries
import ListGroup from 'react-bootstrap/ListGroup';
import Card from 'react-bootstrap/Card';

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
    return (
        <ListGroup.Item>
            <Card>
                <Card.Body>
                    <Card.Title>{SINTOMA['189D70BE-CC59-45E7-8E41-E43CBC6CD8CD'].nombre}</Card.Title>
                    <Card.Subtitle>{SINTOMA['189D70BE-CC59-45E7-8E41-E43CBC6CD8CD'].fecha}</Card.Subtitle>
                </Card.Body>
            </Card>
        </ListGroup.Item>
    )
}

export default SymptomCard;