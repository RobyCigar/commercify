import { useEffect } from "react";
import { Link } from "react-router-dom";
import { connect, useSelector } from "react-redux";
import { Button } from "reactstrap";
import { useCookies } from "react-cookie"

import { homeAction } from "redux/actions"
import Footer from "components/footer";
import Navbar from "components/navbar";
import {fetchUser} from "api";

const Home = () => {
	const [cookie] = useCookies();

	useEffect(()=> {
		fetchUser(cookie.token)
	}, [])
	return (
		<>
			<Navbar logout={true} />
			<Link to="product/add">
				<Button color="primary">Sell Product</Button>
			</Link>
			<Footer />
		</>
	);
};

export default connect(homeAction.state, null)(Home);
