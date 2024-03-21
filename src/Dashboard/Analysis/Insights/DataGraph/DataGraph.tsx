// External Components
import { CategoryBar } from '@tremor/react';

  
function DataGraph() {
    return (
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