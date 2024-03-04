import UserCard from './UserCard'
import UserCard2 from './UserCard2'
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
						<UserCard2 {...user} />
					</Col>
				))}
			</Row>
		</Container >
	);
}

export default UserCardGrid;


// import React, { useState } from 'react';
// import UserCard from './UserCard'
// import { Container, Row, Col, Form } from 'react-bootstrap';

// interface UserData {
// 	nombre: string;
// 	celular: string;
// 	edad: string;
// 	image: string;
// }

// function UserCardGrid(props: { users: UserData[] }) {
// 	const users: UserData[] = props.users;
// 	const [searchTerm, setSearchTerm] = useState('');

// 	const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
// 		setSearchTerm(event.target.value);
// 	};

// 	const filteredUsers = users.filter(user =>
// 		user.nombre.toLowerCase().includes(searchTerm.toLowerCase())
// 	);

// 	return (
// 		<Container>
// 			<Form>
// 				<Form.Group controlId="search">
// 					<Form.Control
// 						type="text"
// 						placeholder="Search"
// 						value={searchTerm}
// 						onChange={handleSearchChange}
// 					/>
// 				</Form.Group>
// 			</Form>
// 			<Row>
// 				{filteredUsers.map((user, index) => (
// 					<Col sm={12} md={6} lg={4} key={index} className='mt-5'>
// 						<UserCard {...user} />
// 					</Col>
// 				))}
// 			</Row>
// 		</Container >
// 	);
// }

// export default UserCardGrid;