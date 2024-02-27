import Card from 'react-bootstrap/Card';



function UserCard(props: any) {
	return (<>
		<Card border="secondary" style={{ width: '18rem' }}>
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