// Own components
import Information from './Information';
import Notes from './Notes';

function SelectedData() {
    return (
        <>
            <div className='flex flex-col gap-4 mt-6 lg:grid lg:grid-cols-12'>
                <div className='lg:col-span-3'>
                    <Information />
                </div>
                <div className='lg:col-span-9'>
                    <Notes />
                </div>
            </div>
        </>
    )
}

export default SelectedData;