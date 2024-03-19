// External Components
import { CategoryBar } from '@tremor/react';

  
function DataGraph() {
    return (
        <>
            <CategoryBar
                values={[40, 30, 20, 10]}
                colors={['emerald', 'yellow', 'orange', 'rose']}
                markerValue={62}
            />
        </>
    )
}

export default DataGraph;