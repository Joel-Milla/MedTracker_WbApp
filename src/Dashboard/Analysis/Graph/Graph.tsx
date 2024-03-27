// Own components
import ModalButton from './Chart/ModalButton';
import Data from './Data/Data';

function Graph() {
    return (
        <>
            {/* Show two things on the graph, the chart and then the selected data when the user click on the graph */}
            <div>
                <div className='flex justify-between'>
                    <h1 className="text-4xl font-semibold">Test6t</h1>
                    <ModalButton />
                </div>
                <div>
                    <Data />
                </div>
            </div>
        </>
    );
}

export default Graph;