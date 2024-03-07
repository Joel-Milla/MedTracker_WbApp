// External libraries
import ListGroup from 'react-bootstrap/ListGroup';
// Components
import SymptomCard from './SymptomCard';
// Models
import { SymptomsObject } from '../DashboardModels/dashboardModels';
// Own styles
import styles from "./SymptomList.module.css"

const SYMPTOMS: SymptomsObject[] = [
    {
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
    },
    {
        "1E284C31-33F0-4112-B9C0-0C43AED4EBE6": {
            "fecha": "February 26, 2024 at 6:28:59 PM UTC-6",
            "color": "#007AFF",
            "cuantitativo": false,
            "unidades": "",
            "icon": "plus.viewfinder",
            "description": "Cuant",
            "id": "1E284C31-33F0-4112-B9C0-0C43AED4EBE6",
            "nombre": "Test8",
            "notificacion": "",
            "activo": true
        }
    },
    {
        "1FC6C98A-D827-413A-8183-FD25A0771810": {
            "fecha": "February 26, 2024 at 6:27:56 PM UTC-6",
            "color": "#007AFF",
            "cuantitativo": false,
            "unidades": "",
            "icon": "plus.viewfinder",
            "description": "12",
            "id": "1FC6C98A-D827-413A-8183-FD25A0771810",
            "nombre": "Test7",
            "notificacion": "",
            "activo": true
        }
    },
    {
        "36FEEA09-3A63-4A48-B595-B9CCA47A3C40": {
            "fecha": "February 11, 2024 at 1:50:17 PM UTC-6",
            "color": "#007AFF",
            "cuantitativo": false,
            "unidades": "",
            "icon": "plus.viewfinder",
            "description": "5",
            "id": "36FEEA09-3A63-4A48-B595-B9CCA47A3C40",
            "nombre": "Test5",
            "notificacion": "",
            "activo": true
        }
    },
    {
        "44E5A71C-198B-489D-9CA7-F68F04044C36": {
            "fecha": "January 18, 2024 at 5:12:34 PM UTC-6",
            "color": "#007AFF",
            "cuantitativo": false,
            "unidades": "",
            "icon": "plus.viewfinder",
            "description": "Test4",
            "id": "44E5A71C-198B-489D-9CA7-F68F04044C36",
            "nombre": "Test4",
            "notificacion": "",
            "activo": true
        }
    },
    {
        "CA2F8094-E00C-4FDA-893E-271B6D1DA1A5": {
            "fecha": "January 18, 2024 at 5:12:27 PM UTC-6",
            "color": "#007AFF",
            "cuantitativo": false,
            "unidades": "",
            "icon": "plus.viewfinder",
            "description": "3",
            "id": "CA2F8094-E00C-4FDA-893E-271B6D1DA1A5",
            "nombre": "Test3",
            "notificacion": "",
            "activo": true
        }
    }
]
function SymptomList() {
    return (
        <div className='col-12 col-md-2'>
            <h2>Datos de Salud</h2>
            <ListGroup className={styles.border}>
                {SYMPTOMS.map( (symptom) => 
                <SymptomCard symptom={Object.values(symptom)[0]}/>)}
            </ListGroup>
        </div>
    )
}

export default SymptomList;