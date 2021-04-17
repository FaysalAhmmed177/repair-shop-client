import React from 'react';
import FooterCol from '../FooterCol/FooterCol';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faGooglePlusG } from '@fortawesome/free-brands-svg-icons';



const Footer = () => {
    const AboutUs = [
        { name: "From our friendly, well-trained staff at each location to a dedicated Customer Consultant Team, rest assured your satisfaction is our number one priority." },

    ]
    const Pages = [
        { name: "Home", link: "#" },
        { name: "About Us", link: "#" },
        { name: "Service", link: "#" },
        { name: "Booking", link: "#" },
        { name: "Blog", link: "#" },
        { name: "Contacts", link: "#" },

    ]
    const Repair = [
        { name: "Smartphone" },
        { name: "Computer" },
        { name: "Electronics" },
        { name: "Applications" },
        { name: "Console" },
        { name: "Helps" }
    ]
    const Contact = [
        { name: "Address:32/A Sukrabad, Dhanmondhi, Dhaka" },
        { name: "Phone: 01618254326" },
        { name: "Email: faysalahmmed177@gmail.com" }
    ]
    return (
        <footer className="bg-dark text-white">
            <div className="container pt-5">
                <div className="row py-5">
                    <FooterCol key={1} menuTitle={"About Us"} menuItems={AboutUs} />
                    <FooterCol key={1} menuTitle={"Pages"} menuItems={Pages} />
                    <FooterCol key={1} menuTitle={"Repair"} menuItems={Repair} />
                    <FooterCol key={1} menuTitle={"Contact"} menuItems={Contact} />
                </div>
                < hr />
                <div className="row p-3">
                    <div className="col-md-6">
                        <p>&#169;Copyright {(new Date()).getFullYear()} All Rights Reserved</p>
                    </div>
                    <div className="col-md-6 text-right">
                        <ul className="social-media list-inline">
                            <li className="list-inline-item"><a href="//facebook.com"><FontAwesomeIcon className="icon active-icon" icon={faFacebookF} /></a></li>
                            <li className="list-inline-item"><a href="//google.com"><FontAwesomeIcon className="icon" icon={faGooglePlusG} /></a></li>
                            <li className="list-inline-item"><a href="//instagram.com"><FontAwesomeIcon className="icon" icon={faInstagram} /></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;