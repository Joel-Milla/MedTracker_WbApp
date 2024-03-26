// External Components
import { CategoryBar } from '@tremor/react';

  
function DataGraph() {
    return (
        // Show a graph of the min/mean/max values
        <>
            <CategoryBar
                values={[4200, 4800, 9000]}
                colors={['yellow', 'orange', 'rose']}
                markerValue={50}
            />
        </>
    )
}

export default DataGraph;