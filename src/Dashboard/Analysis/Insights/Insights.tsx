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
            // Flex to have the items together, and margin bottom to have white space at the end
                className="flex gap-4 w-full p-4 mb-5" >
                <div className='w-1/2'>
                    <DataValues />
                </div>
                <div className='w-1/2'>
                    <DataGraph />
                </div>
            </Card>
        </>
    )
}

export default Insights