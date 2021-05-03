import { useEffect } from "react";
import { Link } from "react-router-dom";
import { connect, useSelector } from "react-redux";
import {
	Button,
	Card,
	CardTitle,
	CardHeader,
	CardFooter,
	CardBody,
	CardText,
} from "reactstrap";
import { useCookies } from "react-cookie";

import { homeAction } from "redux/actions";
import Footer from "components/footer";
import Navbar from "components/navbar";
import { fetchUser } from "api";

const Home = () => {
	const [cookie] = useCookies();

	useEffect(() => {
		fetchUser(cookie.token);
	}, []);
	return (
		<>
			<Navbar logout={true} />
			<Link to="product/add">
				<Button color="primary">Sell Product</Button>
			</Link>
			<div className="row">
				<Card className="col mx-3">
					<CardHeader>Header</CardHeader>
					<CardBody>
						<CardTitle tag="h5">Special Title Treatment</CardTitle>
						<CardText>
							With supporting text below as a natural lead-in to additional
							content.
						</CardText>
						<Button>Go somewhere</Button>
					</CardBody>
					<CardFooter>Footer</CardFooter>
				</Card>
				<Card className="col mx-3">
					<CardHeader>Header</CardHeader>
					<CardBody>
						<CardTitle tag="h5">Special Title Treatment</CardTitle>
						<CardText>
							With supporting text below as a natural lead-in to additional
							content.
						</CardText>
						<Button>Go somewhere</Button>
					</CardBody>
					<CardFooter>Footer</CardFooter>
				</Card>
				<Card className="col mx-3">
					<CardHeader>Header</CardHeader>
					<CardBody>
						<CardTitle tag="h5">Special Title Treatment</CardTitle>
						<CardText>
							With supporting text below as a natural lead-in to additional
							content.
						</CardText>
						<Button>Go somewhere</Button>
					</CardBody>
					<CardFooter>Footer</CardFooter>
				</Card>
			</div>
			<div className="row">
				<Card className="col mx-3">
					<CardHeader>Header</CardHeader>
					<CardBody>
						<CardTitle tag="h5">Special Title Treatment</CardTitle>
						<CardText>
							With supporting text below as a natural lead-in to additional
							content.
						</CardText>
						<Button>Go somewhere</Button>
					</CardBody>
					<CardFooter>Footer</CardFooter>
				</Card>
				<Card className="col mx-3">
					<CardHeader>Header</CardHeader>
					<CardBody>
						<CardTitle tag="h5">Special Title Treatment</CardTitle>
						<CardText>
							With supporting text below as a natural lead-in to additional
							content.
						</CardText>
						<Button>Go somewhere</Button>
					</CardBody>
					<CardFooter>Footer</CardFooter>
				</Card>
				<Card className="col mx-3">
					<CardHeader>Header</CardHeader>
					<CardBody>
						<CardTitle tag="h5">Special Title Treatment</CardTitle>
						<CardText>
							With supporting text below as a natural lead-in to additional
							content.
						</CardText>
						<Button>Go somewhere</Button>
					</CardBody>
					<CardFooter>Footer</CardFooter>
				</Card>
			</div>
			<Footer />
		</>
	);
};

export default connect(homeAction.state, null)(Home);
