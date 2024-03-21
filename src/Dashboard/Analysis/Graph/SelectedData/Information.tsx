// External components
import { List, ListItem } from '@tremor/react';

function Information() {
    return (
        <>
        <h3 className='font-bold text-xl'>Valor Seleccionado</h3>
            <List className="mt-2">
                <ListItem key="telefono">
                    <span className='font-bold'>Informacion </span>
                    <span className='font-bold'>Valores</span>
                </ListItem>
                <ListItem key="sintoma">
                    <span>Sintoma: </span>
                    <span>Test6t</span>
                </ListItem>
                <ListItem key="fecha">
                    <span>Fecha: </span>
                    <span>28 de Febrero</span>
                </ListItem>
                <ListItem key="valor">
                    <span>Valor: </span>
                    <span>42</span>
                </ListItem>
            </List>
        </>
    )
}

export default Information;