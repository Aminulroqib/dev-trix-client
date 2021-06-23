import React from 'react';
import './Footer.css';
import FooterCol from '../FooterCol/FooterCol';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faGooglePlusG } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    const aboutUS = [
        {name: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui cumque facere eligendi. Hic blanditiis, quidem magni omnis earum dolore atque?'},
    ]
    const ourAddress = [
        {name: "Agrabad, Chattogram" , link: "//google.com/map"},
       
    ]
    const quickLinks = [
        {name: "Contact" , link: "/contact"},
        {name: "Our Blog" , link: "/blog"},
        {name: "Front End Development" , link: "/front-end"}
    ]
    const company = [
        {name: "About Us" , link: "/about"},
        {name: "Project" , link: "/project"},
        {name: "Our Team" , link: "/our-team"},
        {name: "Terms and Condition" , link: "/terms"},
        {name: "Submit Listing" , link: "/checkup"}
    ]
    return (
        <footer className="footer-area clear-both footer-decoration">
            <div className="container pt-5">
                <div className="row py-5">
                    <FooterCol key={1} menuTitle={"About Us"} menuItems={aboutUS}/>
                    <FooterCol key={2} menuTitle="Company" menuItems={company}/>
                    <FooterCol key={3} menuTitle="Quick Links" menuItems={quickLinks}/>
                    <FooterCol key={4} menuTitle="Our Address" menuItems={ourAddress}> 
                        <ul className="social-media list-inline">
                            <li className="list-inline-item"><a href="//facebook.com"><FontAwesomeIcon className="icon active-icon" icon={faFacebookF} /></a></li>
                            <li className="list-inline-item"><a href="//google.com"><FontAwesomeIcon className="icon" icon={faGooglePlusG} /></a></li>
                            <li className="list-inline-item"><a href="//instagram.com"><FontAwesomeIcon className="icon" icon={faInstagram} /></a></li>
                        </ul>
                        <div className="mt-5">
                            <h6 class='text-white'>   Call now</h6>
                            <button className="btn btn-brand text-white">+016222288877</button>
                        </div>
                    </FooterCol>
                </div>
                <div className="copyRight text-center text-white">
                    <p>Copyright {(new Date()).getFullYear()} All Rights Reserved</p>
                </div>
            </div>
        </footer>
        
    );
};

export default Footer;