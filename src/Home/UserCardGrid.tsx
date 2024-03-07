import UserCard from './UserCard'
import { Container, Row, Col, Form } from 'react-bootstrap';
import React, { useState } from 'react';
import SearchBar from './SearchBar';

interface UserData {
	nombre: string;
	celular: string;
	edad: string;
	image: string;
}

function UserCardGrid(props: { users: UserData[] }) {
	const users: UserData[] = props.users;
	const [searchTerm, setSearchTerm] = useState('');

	// Filtrar la lista de usuarios con base en el valor del campo de busqueda
	const filteredUsers = users.filter(user =>
		user.nombre.toLowerCase().includes(searchTerm.toLowerCase())
	);



	return (
		<Container >
			<SearchBar
				title='Buscar paciente'
				placeholder='Nombre del paciente'
				setSearchTerm={setSearchTerm}
				searchTerm={searchTerm}
			/>
			<Row>
				{filteredUsers.map((user, index) => (
					<Col sm={12} md={6} lg={4} key={index} className='mt-5'>
						<UserCard {...user} />
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