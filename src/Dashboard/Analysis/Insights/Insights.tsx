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
                className="flex flex-col p-4 w-full mb-10 sm:grid sm:grid-cols-4" >
                <div className='sm:col-span-2'>
                    <DataValues />
                </div>
                <div className='sm:col-span-2'>
                    <DataGraph />
                </div>
            </Card>
        </>
    )
}

export default Insights