import { useState, useContext } from "react";
import { Link, Redirect } from "react-router-dom";
import { useCookies } from 'react-cookie'
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
import UserCtx from "../App";
import gear from "../assets/cogs.svg";

const Navigation = ({ login, register, logout }) => {
	const context = useContext(UserCtx);
	const [cookies, setCookie, removeCookie] = useCookies()
	const [isOpen, setIsOpen] = useState(false);
	const [isLogout, setIsLogout] = useState(false)

	const logoutUser = () => {
		removeCookie('token')
		setIsLogout(true)
	};

	console.log("ucontext", context);

	if(isLogout) {
		return (
			<Redirect to="login" />
		)
	}

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
							<NavLink href="https://github.com/Robycigar">
								GitHub
							</NavLink>
						</NavItem>
						<NavItem className="ml-3">
							<Link to="/product/add">
								<NavLink>Start Selling</NavLink>
							</Link>
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
								<Button
									outline
									className="px-4"
									color="primary"
								>
									Login
								</Button>{" "}
							</Link>
						</NavbarText>
					) : null}

					{logout ? (
						<>
							<UncontrolledDropdown className="mx-4" inNavbar>
								<DropdownToggle caret>
									<img
										style={{ width: 20 }}
										src={gear}
										alt=""
									/>{" "}
									{"  "} Settings {"  "}
								</DropdownToggle>
								<DropdownMenu right>
									<DropdownItem header>Settings</DropdownItem>
									<DropdownItem>Profile</DropdownItem>
									<DropdownItem>
										Dropdown Item Text
									</DropdownItem>
									<DropdownItem divider />
										<DropdownItem
											onClick={logoutUser}
											className="text-danger"
										>
											Logout
										</DropdownItem>
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
