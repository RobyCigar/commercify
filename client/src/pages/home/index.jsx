import { useContext } from 'react'
import { Link } from 'react-router-dom'
import {Button} from 'reactstrap'

import Footer from "../../components/footer";
import Navbar from "../../components/navbar";

const Home = (props) => {

	
 	return (
		<>
			<Navbar logout={true} />
					<Link to="product/add">
				<Button color="primary">
					Sell Product
				</Button>
					</Link>
			<Footer />
		</>
	);
};

export default Home;
