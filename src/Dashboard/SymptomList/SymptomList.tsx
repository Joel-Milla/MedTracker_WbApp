// External libraries
import ListGroup from 'react-bootstrap/ListGroup';
// Components
import SymptomCard from './SymptomCard';
// Models
import { SymptomListProps } from '../DashboardModels/dashboardModels';
// Own styles
import styles from "./SymptomList.module.css"

function SymptomList(properties: SymptomListProps) {
    const { symptoms } = properties;
    if (symptoms) {
        return (
            <div className='col-12 col-md-2'>
                <h2>Datos de Salud</h2>
                <ListGroup className={styles.border}>
                    {symptoms.map( (symptom) => 
                    <SymptomCard symptom={Object.values(symptom)[0]}/>)}
                </ListGroup>
            </div>
        )
    } else {
        return (
            <h1>Empty</h1>
        )
    }
}

export default SymptomList;