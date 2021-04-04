import { useContext } from 'react'
import { Link } from 'react-router-dom'
import {Button} from 'reactstrap'

import Footer from "../components/footer";
import Navbar from "../components/navbar";
import {UserCtx} from '../App'

const Home = (props) => {
	const user = useContext(UserCtx)

	
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
