import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Button } from 'reactstrap';
import Loader from "react-loader-spinner";
import { fetchProduct } from "api";
import Navbar from "components/navbar";
import Footer from "components/footer";
import Moment from 'react-moment';

function Product(props) {
	const [product, setProduct] = useState(null);
	const { id } = useParams();

	useEffect(async () => {
		const result = await fetchProduct(id);
		setProduct(result);
	}, []);

	if (!product) {
		return (
			<Loader
				className="loader--center"
				type="Bars"
				color="#00BFFF"
				height={80}
				width={80}
			/>
		);
	}

	const { created, description, imageUrl, name, price, quantity } = product;

	console.log("product", product);

	return (
		<div>
			<Navbar />
			<div className="d-flex my-5 flex-lg-row flex-column align-items-center">
				<img
					src={`${process.env.REACT_APP_ROUTE_DEV}/${imageUrl}`}
					alt="Card image cap"
					className="mx-auto"
				/>
				<div className="w-50 mx-auto m-5">
					<h1 className="font-weight-bold text-primary">{name}</h1> 
					<p>Posted on {"  "} 
					<Moment format="DD/MM/YYYY">{created}</Moment></p> 
					<p>Price {price}</p>{" "}
					<p>Quantity {quantity}</p>
					<p>{description}</p>
					<Button> Order now via whatsapp</Button>
				</div>
			</div>{" "}
			<Footer />
		</div>
	);
}

export default Product;
