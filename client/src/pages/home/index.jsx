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
	CardImg,
	CardSubtitle,
} from "reactstrap";
import { useCookies } from "react-cookie";
import { useState } from "react";
import Loader from "react-loader-spinner";

import { homeAction } from "redux/actions";
import Footer from "components/footer";
import Navbar from "components/navbar";
import { fetchUser, fetchProduct } from "api";

const Home = () => {
	const [cookie] = useCookies();
	const [products, setProducts] = useState(null);

	useEffect(async () => {
		let userResult = await fetchUser(cookie.token);
		let productResult = await fetchProduct();
		setProducts(productResult);
	}, []);

	console.log(products);

	if (!products) {
		return <Loader type="Bars" color="#00BFFF" height={80} width={80} />;
	}

	return (
		<>
			<Navbar logout={true} />
			<Link to="product/add">
				<Button color="primary">Sell Product</Button>
			</Link>
			<div className="row">
				{products.map((val, index) => (
					<Card>
						<CardImg
							top
							width="300"
							height="200"
							src={`${process.env.REACT_APP_ROUTE_DEV}/${val.imageUrl}`}
							alt="Card image cap"
						/>
						<CardBody>
							<CardTitle tag="h5">{val.name}</CardTitle>
							<CardSubtitle tag="h6" className="mb-2 text-muted">
								Card subtitle
							</CardSubtitle>
							<CardText>
								Some quick example text to build on the card
								title and make up the bulk of the card's
								content.
							</CardText>
							<Button>Button</Button>
						</CardBody>
					</Card>
				))}
			</div>
			<Footer />
		</>
	);
};

export default connect(homeAction.state, homeAction.dispatch)(Home);
