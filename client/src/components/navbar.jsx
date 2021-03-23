import { useState } from "react";
import { Link } from "react-router-dom";
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
import gear from "../assets/cogs.svg";

const Navigation = ({ login, register, logout }) => {
	const [isOpen, setIsOpen] = useState(false);

	const toggle = () => setIsOpen(!isOpen);
	return (
		<div>
			<Navbar color="white" dark={false} light expand="md">
				<NavbarToggler onClick={toggle} />
				<Collapse isOpen={isOpen} navbar>
					<Nav className="mr-auto" navbar>
						<NavItem className="ml-3">
							<Link to="/">
								<NavLink>Home</NavLink>
							</Link>
						</NavItem>
						<NavItem className="ml-3">
							<NavLink href="https://github.com/Robycigar">GitHub</NavLink>
						</NavItem>
						<NavItem className="ml-3">
							<NavLink>Start Selling</NavLink>
						</NavItem>
						<NavItem className="ml-3">
							<Link to="/home">
								<NavLink>All Products</NavLink>
							</Link>
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
					{register ? (
						<NavbarText className="mr-4">
							<Link to="/register">
								<Button color="secondary px-3">Sign Up</Button>{" "}
							</Link>
						</NavbarText>
					) : null}

					{login ? (
						<NavbarText className="mr-5 text-white">
							<Link to="/login">
								<Button outline className="px-4" color="primary">
									Login
								</Button>{" "}
							</Link>
						</NavbarText>
					) : null}

					{logout ? (
						<>
							<UncontrolledDropdown className="mx-4" inNavbar>
								<DropdownToggle caret><img style={{width: 20}} src={gear} alt="" /></DropdownToggle>
								<DropdownMenu right>
									<DropdownItem header>Settings</DropdownItem>
									<DropdownItem>Profile</DropdownItem>
									<DropdownItem>Dropdown Item Text</DropdownItem>
									<DropdownItem divider />
									<Link to="/"><DropdownItem className="text-danger">Logout</DropdownItem></Link>
								</DropdownMenu>
							</UncontrolledDropdown>
						</>
					) : null}
				</Collapse>
			</Navbar>
		</div>
	);
};

export default Navigation;
