import { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { useCookies } from "react-cookie";
import { connect } from "react-redux";
import { TOKEN, USER, REMOVE_TOKEN } from "redux/constants";
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

const mapStateToProps = ({ user }) => {
	return {
		role: user.role,
		token: user.token
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		handleLogout: () => {
			return dispatch({ type: REMOVE_TOKEN, payload: null });
		},
		handleUser: () => {
			return dispatch({ type: USER, payload: null });
		},
	};
};

const Navigation = ({
	login,
	register,
	logout,
	handleLogout,
	handleUser,
	role,
	token
}) => {
	const [cookies, , removeCookie] = useCookies();
	const [isOpen, setIsOpen] = useState(false);
	const [userLogout, setUserLogout] = useState(false);

	const logoutUser = () => {
		removeCookie("token", {
			secure: true,
			sameSite: true,
		});
		handleLogout();
		// setUserLogout(true);
	};

	const toggle = () => setIsOpen(!isOpen);

	if (!token) {
		return <Redirect to="/login" />;
	}

	return (
		<div>
			<Navbar color="white" dark={false} light expand="md">
				<NavbarToggler onClick={toggle} />
				<Collapse isOpen={isOpen} navbar>
					<Nav className="mr-auto" navbar>
						<NavItem className="ml-3">
							<Link to="/home">
								<NavLink>Home</NavLink>
							</Link>
						</NavItem>
						<NavItem className="ml-3">
							<NavLink href="https://github.com/Robycigar">
								GitHub
							</NavLink>
						</NavItem>
						{role === "ROLE_ADMIN" || role === "ROLE_MERCHANT" ? (
							<NavItem className="ml-3">
								<Link to="/product/add">
									<NavLink>Start Selling</NavLink>
								</Link>
							</NavItem>
						) : null}
						<NavItem className="ml-3">
							<Link to="/home">
								<NavLink>All Products</NavLink>
							</Link>
						</NavItem>
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
						<div className="mr-2">
							<UncontrolledDropdown
								className="ml-3 mr-5"
								inNavbar
							>
								<DropdownToggle caret>
									<img
										style={{ width: 20 }}
										src={gear}
										alt=""
									/>{" "}
									{"  "} Settings {"  "}
								</DropdownToggle>
								<DropdownMenu>
									<DropdownItem header>Settings</DropdownItem>
									<DropdownItem>My Profile</DropdownItem>
									{role === "ROLE_ADMIN" ||
									role === "ROLE_MERCHANT" ? (
										<Link to="/product/my-product">
											<DropdownItem>
												My Product
											</DropdownItem>
										</Link>
									) : null}
									<DropdownItem divider />
									<DropdownItem onClick={logoutUser}>
										Sign Out
									</DropdownItem>
								</DropdownMenu>
							</UncontrolledDropdown>
						</div>
					) : null}
				</Collapse>
			</Navbar>
		</div>
	);
};

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);
