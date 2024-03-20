// External components
import { Card } from "@nextui-org/react";
// Own components
import Information from './Information';
import Notes from './Notes';

function SelectedData() {
    return (
        <>
            <Card className="p-4">
                <div className='grid grid-cols-12 gap-4 mt-6'>
                    <div className=' col-span-3'>
                        <Information />
                    </div>
                    <div className=' col-span-9'>
                        <Notes />
                    </div>
                </div>
            </Card>
        </>
    )
}

export default SelectedData;