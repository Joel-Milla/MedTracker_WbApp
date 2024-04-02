// Redux connection
import { RootState } from '../../../../state/store';
import { useSelector } from "react-redux";
// External components
import { List, ListItem } from '@tremor/react';

function Information() {
    // Obtain the selected data point
    const selectedDataPoint = useSelector((state: RootState) => state.ui.selectedDataPoint);

    return (
        <>
            {/* Show a list of metadata of the symptom */}
            <List className="">
                <ListItem key="telefono">
                    <span className='font-bold'>Informacion </span>
                    <span className='font-bold'>Valores</span>
                </ListItem>
                <ListItem key="sintoma">
                    <span>Sintoma: </span>
                    <span>{selectedDataPoint.symptomName}</span>
                </ListItem>
                <ListItem key="fecha">
                    <span>Fecha: </span>
                    <span>{selectedDataPoint.date}</span>
                </ListItem>
                <ListItem key="valor">
                    <span>Valor: </span>
                    <span>{selectedDataPoint.amount}</span>
                </ListItem>
            </List>
        </>
    )
}

export default Information;