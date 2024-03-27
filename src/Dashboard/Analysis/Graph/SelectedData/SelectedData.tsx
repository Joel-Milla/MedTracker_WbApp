// Own components
import Information from './Information';
import DelimiterPersianGreen from '../../../Header/Title/DelimiterPersianGreen';
import Notes from './Notes';

function SelectedData() {
    return (
        <>
            {/* Two things are shown when the user clicks on the chart, the general information like data and name of symptom, and then the notes of that day */}
            <div>
                {/* Show the title with a bottom margin*/}
                <div className='mb-5'>
                    {/* Bottom margin to separate the title and delimiter */}
                    <h3 className="text-2xl mb-2">Valor Seleccionado</h3>
                    {/* Show delimiter */}
                    <DelimiterPersianGreen />
                </div>
                {/* Use flex to show the items together*/}
                <div className='flex flex-col gap-4 md:flex-row'>
                    <div className='md:w-1/2 2xl:w-1/3'>
                        <Information />
                    </div>
                    {/* Full width to occupy the available space */}
                    <div className='w-full'>
                        <Notes />
                    </div>
                </div>
            </div>
        </>
    )
}

export default SelectedData;