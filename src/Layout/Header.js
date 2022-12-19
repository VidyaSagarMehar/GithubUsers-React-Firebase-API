import React, { useState, useContext } from 'react';
import {
	Collapse,
	Navbar,
	NavbarBrand,
	NavbarToggler,
	Nav,
	NavItem,
	NavLink,
	NavbarText,
} from 'reactstrap';
import { Link } from 'react-router-dom';
import { UserContext } from '../Context/UserContext';

export default function Header() {
	const context = useContext(UserContext);
	const [isOpen, setIsOpen] = useState(false);
	const toggle = () => setIsOpen(!isOpen);

	return (
		<Navbar color="info" light expand="md">
			<NavbarBrand>Auth app firebase</NavbarBrand>
			<NavbarText className="text-white">
				{context.user?.email ? context.user.email : ''}
			</NavbarText>
			<NavbarToggler onClick={toggle} />
			<Collapse navbar isOpen={isOpen}>
				<Nav navbar className="ml-auto">
					{context.user ? (
						<NavItem>
							<NavLink
								onClick={() => {
									context.setUser(null);
								}}
								className="text-white"
							>
								Log out
							</NavLink>
						</NavItem>
					) : (
						<>
							<NavItem>
								<NavLink tag={Link} to="/signup" className="text-white">
									Sign up
								</NavLink>
							</NavItem>
							<NavItem>
								<NavLink tag={Link} to="/signin" className="text-white">
									Sign in
								</NavLink>
							</NavItem>
						</>
					)}
				</Nav>
			</Collapse>
		</Navbar>
	);
}
