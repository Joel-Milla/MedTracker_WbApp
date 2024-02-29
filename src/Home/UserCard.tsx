import Card from 'react-bootstrap/Card';



function UserCard(props: any) {
	return (<>
		<Card key='light' style={{ width: '18rem' }} className="mb-2 bg-light">
			<Card.Header>{props.nombre}</Card.Header>
			<Card.Body>
				<Card.Title>{props.celular}</Card.Title>
				<Card.Text>
					Some quick example text to build on the card title and make up the
					bulk of the card's content.
				</Card.Text>
			</Card.Body>
		</Card>

		<Card key='light' style={{ width: '18rem', backgroundColor: '#f8f9fa' }} className="mb-2">
			<Card.Header>{props.nombre}</Card.Header>
			<Card.Body>
				<Card.Title>{props.celular}</Card.Title>
				<Card.Text>
					Some quick example text to build on the card title and make up the
					bulk of the card's content.
				</Card.Text>
			</Card.Body>
		</Card>

		<br />
	</>)
}

export default UserCard