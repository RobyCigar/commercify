import { useContext } from 'react'

import Footer from "../components/footer";
import Navbar from "../components/navbar";
import {UserCtx} from '../App'

const Home = (props) => {
	const user = useContext(UserCtx)

	console.log(user)
	const cookie = document.cookie
	cookie.split("=")
	console.log('cookie', cookie)


 	return (
		<>
			<Navbar logout={true} />
			<Footer />
		</>
	);
};

export default Home;
