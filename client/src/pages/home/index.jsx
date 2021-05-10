import { useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import {
	Button,
	Card,
	CardTitle,
	CardBody,
	CardText,
	CardSubtitle,
} from "reactstrap";
import { useState } from "react";
import Loader from "react-loader-spinner";
import ReactPaginate from "react-paginate";

import { homeAction } from "redux/actions";
import styles from "./styles.module.css";
import Footer from "components/footer";
import Navbar from "components/navbar";
import { fetchProducts } from "api";

const Home = () => {
	const [products, setProducts] = useState(null);
	const [pageCount, setPageCount] = useState(4);
	const [tmpItems, setTmpItems] = useState(null);

	useEffect(() => {
		let productResult = fetchProducts();
		setProducts(productResult);
		// Fetch first 6 items in the array
		setTmpItems(productResult.slice(0, 6));
		console.log(productResult);
		// Length of product divide by item in each page
		setPageCount(productResult.length / 6);
	}, []);

	const handlePageClick = (data) => {
		let num = data.selected;
		console.log("clicked", num);
		// change the next 6 or prev 6 items when the btn clicked
		setTmpItems(products.slice(num * 6, num * 6 + 6));
	};

	const onPageActive = (data) => {
		console.log("fuck", data);
	};
	console.log("tmp", tmpItems);

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
										state: { shit: "okay" },
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
				onPageActive={onPageActive}
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

export default connect(homeAction.state, homeAction.dispatch)(Home);
