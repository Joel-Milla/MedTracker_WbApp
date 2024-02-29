import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './UserCard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

interface UserCardProps {
	nombre: string;
	celular: string;
	edad: string;
	image: string;
}

function UserCard(props: UserCardProps) {
	return (<>
		<Card bg='light' key='Light' text='dark' className="mb-2 card-container">
			<div className="image-container" >
				<Card.Img variant="top" src={props.image} className='cardImage' />
			</div>
			<Card.Header className='mt-3'>{props.nombre}</Card.Header>
			<Card.Body>
				<Card.Text><strong>Celular:</strong> {props.celular}</Card.Text>
				<Card.Text><strong>Edad:</strong> {props.edad} años</Card.Text>
				<Button variant="primary">
					Más detalles
					<FontAwesomeIcon icon={faArrowRight} className="icon" />
				</Button>
			</Card.Body>
		</Card>
		<br />
	</>)
}

export default UserCard