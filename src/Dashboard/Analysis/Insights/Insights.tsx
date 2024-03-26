// External Components
import { Card } from '@tremor/react';
// Own Components
import DataValues from './DataValues/DataValues';
import DataGraph from './DataGraph/DataGraph';

function Insights() {
    return (
        // Show the minimum value, the mean, and maximum value of all the data of the cart in two ways, on numeric values and on a graph
        <>
            <Card
                key="1"
                className="flex flex-col p-4 w-full mb-10 lg:grid lg:grid-cols-4" >
                <div className='lg:col-span-2'>
                    <DataValues />
                </div>
                <div className='lg:col-span-2'>
                    <DataGraph />
                </div>
            </Card>
        </>
    )
}

export default Insights