// Own components
import Chart from './Chart/Chart';
import SelectedData from './SelectedData/SelectedData';

function Graph() {
    return (
        <>
            <div className='shadow-xl p-5'>
                <Chart />
                <SelectedData />
            </div>
        </>
    );
}

export default Graph;