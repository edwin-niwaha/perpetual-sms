import React, { useState, useEffect } from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import hero from '../assets/hero.png';
import useUser from '../hooks/useUser';

const Home = () => {
    const user = useUser();
    return (
        <div>
            <NavBar />
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-6 m-auto">
                        <div className="p-4">
                            <img src={hero} alt="Background-image" className="img-fluid mx-auto" />
                        </div>
                    </div>
                    <div className="col-md-6 m-auto">
                        <div className="p-4">
                            <div className="d-flex justify-content-center align-items-center">
                                <div className="text-center">
                                    <h3>Sponsorship & Donor Management Software (SDMS)</h3>
                                    <hr className="my-4" style={{ height: '5px', backgroundColor: '#008080' }} />
                                    {user ? (
                                        <div className="welcome-message">
                                            <p>
                                                Dear <strong>{user.username}</strong>,
                                                <span style={{ color: '#F79420' }}> Welcome to Perpetual - SDMS</span>
                                                {' | You are now logged in.'}
                                            </p>
                                        </div>
                                    ) : (
                                        <div className="mt-4">
                                            <a href="/login" className="btn btn-primary btn-lg mr-2">
                                                Sign In
                                            </a>
                                            <span className="mx-2">OR</span>
                                            <a href="/register" className="btn btn-primary btn-lg ml-2">
                                                Register
                                            </a>
                                        </div>
                                    )}
                                    <hr className="my-4" style={{ height: '5px', backgroundColor: '#008080' }} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Home;
