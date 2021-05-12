import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
	Button,
	Card,
	CardTitle,
	CardBody,
	CardText,
	CardSubtitle,
} from "reactstrap";
import { useDispatch } from 'react-redux';
import { useCookies } from 'react-cookie'
import Loader from "react-loader-spinner";
import ReactPaginate from "react-paginate";

import styles from "./styles.module.css";
import Footer from "components/footer";
import Navbar from "components/navbar";
import { TOKEN } from "redux/constants";
import { fetchProducts } from "api";

const Home = () => {
	const [products, setProducts] = useState(null);
	const [pageCount, setPageCount] = useState(4);
	const [tmpItems, setTmpItems] = useState(null);

	useEffect(() => {
		try {
			async function fetch() {
				let productResult = await fetchProducts();
				setProducts(productResult);
				// Fetch first 6 items in the array
				setTmpItems(productResult.slice(0, 6));
				// Length of product divide by item in each page
				setPageCount(productResult.length / 6);
			}
			fetch()
		} catch (e) {
			// console.log("error", e)
		}
	}, []);

	const handlePageClick = (data) => {
		let num = data.selected;
		// change the next 6 or prev 6 items when the btn clicked
		setTmpItems(products.slice(num * 6, num * 6 + 6));
	};


	if (!products || !tmpItems) {
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
		<>
			<Navbar logout={true} />
			<div className="row my-5 mx-auto container">
				{tmpItems.map((val, index) => (
					<Card
						key={val._id}
						className="col-12 container col-sm-6 col-lg-4 my-4"
					>
						<img
							src={`${process.env.REACT_APP_ROUTE_DEV}/${val.imageUrl}`}
							alt={val.name}
							className={styles.img}
						/>
						<CardBody>
							<CardTitle tag="h5">
								<Link
									to={{
										pathname: `product/${val._id}`,
									}}
									style={{ fontSize: 18 }}
									className="font-weight-bold"
								>
									{val.name}
								</Link>
							</CardTitle>
							<CardSubtitle tag="h6" className="mb-2 text-muted">
								Stock: {val.quantity}
							</CardSubtitle>{" "}
							<CardSubtitle tag="h6" className="mb-2 text-muted">
								Price: Rp.{val.price}
							</CardSubtitle>
							<CardText className={styles.desc}>
								{val.description}
							</CardText>
							<Button color="primary">Order Now</Button>
						</CardBody>
					</Card>
				))}
			</div>
			<ReactPaginate
				activeClassName={styles.active}
				breakClassName={styles.break}
				breakLabel={"..."}
				className={styles.pagination}
				containerClassName={styles.container}
				marginPagesDisplayed={0}
				nextLabel={"next >"}
				onPageChange={handlePageClick}
				pageRangeDisplayed={5}
				pageClassName={styles.page}
				pageCount={pageCount}
				previousLabel={"< previous"}
				previousLinkClassName={styles.previous}
				nextLinkClassName={styles.next}
			/>
			<Footer />
		</>
	);
};

export default Home;
