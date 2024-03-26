// Own components
import Chart from './Chart/Chart';
import SelectedData from './SelectedData/SelectedData';

function Graph() {
    return (
        <>
        {/* Show two things on the graph, the chart and then the selected data when the user click on the graph */}
            <div className='shadow-xl p-5'>
                <Chart />
                <SelectedData />
            </div>
        </>
    );
}

export default Graph;