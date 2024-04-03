// Own components
import TabBar from '../Chart/TabBar';
import Chart from '../Chart/Chart';
import SelectedData from '../SelectedData/SelectedData';

function Data() {
    return (
        <>
        {/* Show the chart and the selected data together. Add also a margin top of the selected data between the view and the chart */}
            <div>
                <TabBar />
                <Chart />
            </div>
            <div className='mt-6'>
                <SelectedData />
            </div>
        </>
    );
}

export default Data;