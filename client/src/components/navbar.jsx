import { useState } from "react";
import { Link } from 'react-router-dom'
import {
	Collapse,
	Navbar,
	NavbarToggler,
	Nav,
	NavItem,
	NavLink,
	UncontrolledDropdown,
	DropdownToggle,
	DropdownMenu,
	DropdownItem,
	NavbarText,
	Button,
} from "reactstrap";
import logo from "../assets/logo.png";

const Navigation = (props) => {
	const [isOpen, setIsOpen] = useState(false);

	const toggle = () => setIsOpen(!isOpen);
	return (
		<div>
			<Navbar color="white" dark={false} light expand="md">
				<NavbarToggler onClick={toggle} />
				<Collapse isOpen={isOpen} navbar>
					<Nav className="mr-auto" navbar>
						<NavItem className="ml-3">
							<NavLink href="/components/">Portfolio</NavLink>
						</NavItem>
						<NavItem className="ml-3">
							<NavLink href="https://github.com/Robycigar">
								GitHub
							</NavLink>
						</NavItem>
						<UncontrolledDropdown nav inNavbar>
							<DropdownToggle nav caret className="ml-3">
								Category
							</DropdownToggle>
							<DropdownMenu right>
								<DropdownItem>Kids</DropdownItem>
								<DropdownItem divider />
								<DropdownItem>Fashion</DropdownItem>
								<DropdownItem divider />
								<DropdownItem>Electronict</DropdownItem>
							</DropdownMenu>
						</UncontrolledDropdown>
					</Nav>
					<NavbarText className="mr-4">
						<Button color="secondary px-3">Sign Up</Button>{" "}
					</NavbarText>
					<NavbarText className="mr-5 text-white">
						<Link to='/login'>
						<Button className="px-4" color="primary">
							Login
						</Button>{" "}
						</Link>
					</NavbarText>
				</Collapse>
			</Navbar>
		</div>
	);
};

export default Navigation;
