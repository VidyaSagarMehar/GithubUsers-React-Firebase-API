import React from 'react';
import { Card, CardBody } from 'reactstrap';

export default function UserCard({ user }) {
	return (
		<Card className="text-center mt-3 mb-3">
			<img width="100px" height="100px" src={user.avatar_url} />
			<CardBody>
				<div className="text-primary">{user.name}</div>
				<div className="text-primary">{user.location}</div>
				<div className="text-primary">{user.bio}</div>
				<div className="text-info">
					Available for hire{user.hireable ? 'Yes' : 'Nope'}
				</div>
			</CardBody>
		</Card>
	);
}
