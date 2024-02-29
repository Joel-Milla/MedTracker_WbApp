import UserCard from './UserCard'
import { Container, Row, Col } from 'react-bootstrap';

interface UserData {
	nombre: string;
	celular: string;
	edad: string;
	image: string;
}

function UserCardGrid(props: { users: UserData[] }) {
	const users: UserData[] = props.users;

	return (
		<Container>
			<Row>
				{users.map((user, index) => (
					<Col sm={12} md={6} lg={4} key={index} className='mt-5'>
						<UserCard {...user} />
					</Col>
				))}
			</Row>
		</Container >
	);
}

export default UserCardGrid;
