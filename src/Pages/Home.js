import React, { useState, useContext } from 'react';
import Axios from 'axios';

import { Row, Container, Col, Input, Button, InputGroup } from 'reactstrap';
import UserCard from '../Components/UserCard';
import Repos from '../Components/Repos';
import { Redirect } from 'react-router-dom';
import { UserContext } from '../Context/UserContext';
import { toast } from 'react-toastify';
import { async } from '@firebase/util';

export default function Home() {
	const context = useContext(UserContext);
	const [query, setQuery] = useState('');
	const [user, setUser] = useState(null);

	const fetchDetails = async () => {
		try {
			const { data } = await Axios.get(`https://api.github.com/users/${query}`);
			setUser(data);
			console.log({ data });
		} catch (error) {
			toast('Not able to locate user', {
				type: 'error',
			});
		}
	};

	return (
		<Container>
			<Row className=" mt-3">
				<Col md="5">
					<InputGroup>
						<Input
							type="text"
							value={query}
							onChange={(e) => setQuery(e.target.value)}
							placeholder="Please provide the username"
						/>

						<Button onClick={fetchDetails} color="primary">
							Fetch User
						</Button>
					</InputGroup>
					{user ? <UserCard user={user} /> : null}
				</Col>
				<Col md="7"></Col>
			</Row>
		</Container>
	);
}
