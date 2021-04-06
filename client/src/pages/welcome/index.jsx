import Navbar from '../components/navbar'
import Carousel from '../components/carousel'
import Footer from '../components/footer'

const Landing = (props) => {
  return (
  	<>
  	<Navbar login={true} register={true}/>
  	<Carousel/>
  	<Footer/>
  	</>
  )
}

export default Landing;