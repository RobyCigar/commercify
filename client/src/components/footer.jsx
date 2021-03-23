import React from 'react';

const Footer = (props) => {
  return (
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
    </div>
  )
}

export default Footer;