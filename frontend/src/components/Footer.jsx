import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-dark text-white mt-5 p-4 text-center">
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <h5>About Us</h5>
                        <p>
                            We are dedicated to providing the best sponsorship and donor management solutions. Our mission is to help you manage your sponsors and donors efficiently.
                        </p>
                    </div>
                    <div className="col-md-4">
                        <h5>Quick Links</h5>
                        <ul className="list-unstyled">
                            <li>
                                <Link to="/" className="text-white">Home</Link>
                            </li>
                            <li>
                                <Link to="/about" className="text-white">About</Link>
                            </li>
                            <li>
                                <Link to="/contact" className="text-white">Contact</Link>
                            </li>
                            <li>
                                <Link to="/dashboard" className="text-white">Dashboard</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-4">
                        <h5>Contact Us</h5>
                        <p>Email: support@perpetualsms.com</p>
                        <p>Phone: +1 234 567 890</p>
                        <p>Address: 123 Main St, City, Country</p>
                    </div>
                </div>
                <div className="mt-4">
                    <p>&copy; {new Date().getFullYear()} Perpetual SDMS. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
