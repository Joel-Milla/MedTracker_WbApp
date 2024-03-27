// Own components
import Chart from './Chart/Chart';
import SelectedData from './SelectedData/SelectedData';

function Graph() {
    return (
        <>
            {/* Show two things on the graph, the chart and then the selected data when the user click on the graph */}
            <div>
                <h1 className="text-4xl font-semibold">Test6t</h1>
                <div>
                    <Chart />
                </div>
                <div className='mt-6'>
                    <SelectedData />
                </div>
            </div>
        </>
    );
}

export default Graph;