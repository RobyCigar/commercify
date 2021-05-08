import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Loader from "react-loader-spinner";
import { fetchProduct } from 'api';
import Navbar from 'components/navbar';
import Footer from 'components/footer';

function Product(props) {
	const [product, setProduct] = useState(null)
	const {id} = useParams()

	useEffect(async () => {
		const result = await fetchProduct(id);
		setProduct(result)

	},[])
	
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

	return (
		<div>
			<Navbar/>
			<div className="">
						<img
							src={`${process.env.REACT_APP_ROUTE_DEV}/${product.imageUrl}`}
							alt="Card image cap"
						/>
			</div>
			<div>
				<p>Something</p>
			</div>
			<Footer/>
		</div>	
	)
}

export default Product;