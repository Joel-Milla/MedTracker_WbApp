// External Components
import { Badge } from '@tremor/react';

function Title() {
    return (
        <>
            <div className="flex gap-3">
                <h3 className="text-xl">Datos Compartidos</h3>
                <Badge size="xs">6</Badge>
            </div>
            <div className="mt-2 border-b-1 border-persian-green-500 w-full col-span-12"></div>
        </>
    )
}

export default Title;