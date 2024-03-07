import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Row, Col } from 'react-bootstrap';
import './UserCard.css';

interface UserCardProps {
	nombre: string;
	celular: string;
	edad: string;
	image: string;
}

function UserCard(props: UserCardProps) {
	return (
		<Card bg='light' key='Light' text='dark' className="card-container">
			<Card.Header className='text-center'>{props.nombre}</Card.Header>
			<Card.Body>
				<Row>
					<Col xs={12} md={6} lg={6}>
						<div className="image-container">
							<Card.Img variant="top" src={props.image} className='cardImage' />
						</div>
					</Col>
					<Col xs={12} md={6} lg={6}>
						<Card.Text style={{ marginBottom: '-5px' }}>{props.celular}</Card.Text>
						<Card.Text><em>Celular</em></Card.Text>
						<Card.Text style={{ marginBottom: '-5px' }}>{props.edad} años</Card.Text>
						<Card.Text><em>Edad</em></Card.Text>

					</Col>
					<Button variant="primary" className='mt-2'>Ver más</Button>
				</Row>
			</Card.Body>
		</Card>
	)
}

export default UserCard;