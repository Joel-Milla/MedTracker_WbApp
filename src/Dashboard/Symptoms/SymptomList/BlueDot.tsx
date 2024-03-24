// External font icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';

// Icon that shows a blue dot. 
const BlueDot = () => {
    return (
        <FontAwesomeIcon icon={faCircle} style={{ color: '#009C8C', fontSize: '8px' }} />
    );
};

export default BlueDot;