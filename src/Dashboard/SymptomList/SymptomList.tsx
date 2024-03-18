// External libraries
import { Listbox, ListboxItem } from "@nextui-org/react";
// Components
import SymptomCard from './SymptomCard';
// Mock Data
import USERS from "../assets/MockData/UsersData";

function SymptomList() {
    return (
        <div className=''>
            <Listbox
                aria-label="Actions"
                onAction={(key) => alert(key)}
            >
                {USERS.map((user) => {
                    return (
                        <ListboxItem key={user.id} color="primary" textValue={song.name}><TrackNextUI song={song} /></ListboxItem>
                    )
                })}
            </Listbox>
        </div>
    )
}

export default SymptomList;