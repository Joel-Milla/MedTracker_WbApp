// External Components
import { Card } from '@tremor/react';
// Own Components
import DataValues from './DataValues/DataValues';
import DataGraph from './DataGraph/DataGraph';

function Insights() {
    return (
        <>
            <Card
                key="1"
                className="grid grid-cols-4 p-4 w-full mb-10" >
                <div className='col-span-2'>
                    <DataValues />
                </div>
                <div className='col-span-2'>
                    <DataGraph />
                </div>
            </Card>
        </>
    )
}

export default Insights