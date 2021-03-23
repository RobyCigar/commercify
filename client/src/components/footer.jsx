import {Link} from 'react-router-dom'
import wa from '../assets/whatsapp.svg'
import fb from '../assets/facebook.svg'
import tw from '../assets/twitter.svg'
import ig from '../assets/instagram.svg'

const Footer = (props) => {
  return (
    <>
    <div className="py-5 d-flex flex-column flex-md-row justify-content-center border-top ">
    	<ul className="mx-5 list-unstyled">
    		<h4>About</h4>
    		<li>Contact Us</li>
    		<li>Sell With Us</li>
    	</ul>
    	<ul className="mx-5 list-unstyled">
    		<h4>Social Media</h4>
    		<li>Instagram</li>
    		<li>Twitter</li>
    		<li>Facebook</li>
    		<li>Line</li>
    	</ul>
    	<ul className="mx-5 list-unstyled">
    		<h4>Services</h4>
    		<li>Web Design</li>
    		<li>UI/UX</li>
    		<li>Blog</li>
    		<li>Others...</li>
    	</ul>
        <div className="d-flex justify-content-center m-5">
            <Link>
            <img className="mx-2" style={{width: 30}} src={wa} alt=""/>
            </Link>
            <Link>
            <img className="mx-2" style={{width: 30}} src={fb} alt=""/>
            </Link>
            <Link>
            <img className="mx-2" style={{width: 30}} src={tw} alt=""/>
            </Link>
            <Link>
            <img className="mx-2" style={{width: 30}} src={ig} alt=""/>
            </Link>
        </div>
    </div>
    </>
  )
}

export default Footer;