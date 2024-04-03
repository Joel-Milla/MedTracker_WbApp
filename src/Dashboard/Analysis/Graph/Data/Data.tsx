// Own components
import DateFiltering from '../Chart/DateFiltering';
import Chart from '../Chart/Chart';
import ChartFiltering from '../Chart/ChartFiltering';
import SelectedData from '../SelectedData/SelectedData';

function Data() {
    return (
        <>
            {/* Show the chart and the selected data together. Add also a margin top of the selected data between the view and the chart */}
            <div className='flex flex-col gap-2'>
                <DateFiltering />
                <Chart />
                <div className='flex justify-end'>
                    <ChartFiltering />
                </div>
            </div>
            <div className='mt-6'>
                <SelectedData />
            </div>
        </>
    );
}

export default Data;