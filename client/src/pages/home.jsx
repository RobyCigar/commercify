import Footer from "../components/footer";
import Navbar from "../components/navbar";

const Home = (props) => {
	return (
		<>
			<Navbar logout={true} />
			<Footer />
		</>
	);
};

export default Home;
