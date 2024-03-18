import React from 'react';
import { Form } from 'react-bootstrap';

interface SearchBarProps {
	title: string;
	placeholder: string;
	searchTerm: string;
	setSearchTerm: (searchTerm: string) => void;
}

function SearchBar(props: SearchBarProps) {
	// Obtiene valor del campo de busqueda
	const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		props.setSearchTerm(event.target.value);
	};

	return (
		<Form>
			<Form.Group controlId="search-bar">
				<Form.Label>{props.title}</Form.Label>
				<Form.Control
					type="text"
					placeholder={props.placeholder}
					value={props.searchTerm}
					onChange={handleSearchChange}
				/>
			</Form.Group>
		</Form>
	);
}

export default SearchBar;
