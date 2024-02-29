import 'bootstrap/dist/css/bootstrap.min.css';

import Badge from 'react-bootstrap/Badge';
import ListGroup from 'react-bootstrap/ListGroup';

const SINTOMAS = [
    {
        nombre: 'Insomnio',
        editado: '27 Feb 2024'
    },
    {
        nombre: 'Diabetes',
        editado: '26 Feb 2024'
    },
    {
        nombre: 'Dolor muscular',
        editado: '21 Feb 2024'
    },
    {
        nombre: 'Dolor de cabeza',
        editado: '19 Feb 2024'
    },
    {
        nombre: 'Presion',
        editado: '1 Feb 2024'
    },
    {
        nombre: 'Meditacion',
        editado: '21 Enero 2024'
    },
    {
        nombre: 'Cansancio',
        editado: '21 Feb 2023'
    },
    {
        nombre: 'Sueño',
        editado: '21 Feb 2022'
    }
]
function SymptomList() {
    return (
        <ListGroup as="ol" numbered>
            {SINTOMAS.map( (sintoma) => {
                return (
                    <ListGroup.Item
                    as="li"
                    className="d-flex justify-content-between align-items-start"
                    >
                    <div className="ms-2 me-auto">
                        <div className="fw-bold">{sintoma.nombre}</div>
                        {sintoma.editado}
                    </div>
                    </ListGroup.Item>
                );
            })}
        </ListGroup>
    );
}

export default SymptomList;

