import React from 'react';
import NavBar from '../components/NavBar';
import hero from '../assets/hero.png';
import api from "../services/api";

const Home = () => {
    return (
        <div>
            <NavBar />
            <div className="container fluid">
                <div className="row">
                    <div className="col-md-6 m-auto">
                        <div className="p-4">
                            <img src={hero} alt="Logo" className="img-fluid mx-auto" />

                        </div>
                    </div>

                    <div className="col-md-6 m-auto">
                        <div className="p-4">
                            <div className="d-flex justify-content-center align-items-center">
                                <div className="text-center">
                                    <h3>Sponsorship & Donor Management Software (SDMS)</h3>
                                    <hr className="my-4" style={{ height: '5px', backgroundColor: '#008080' }} />
                                    <div className="mt-4">
                                        <a href="/login" className="btn btn-primary btn-lg mr-2">
                                            Sign In
                                        </a>
                                        <span className="mx-2">OR</span>
                                        <a href="/register" className="btn btn-primary btn-lg ml-2">
                                            Register
                                        </a>
                                    </div>
                                    <hr className="my-4" style={{ height: '5px', backgroundColor: '#008080' }} />
                                    <div className="welcome-message">
                                        <p>
                                            Dear{' user.name '}
                                            <span style={{ color: '#F79420' }}>
                                            </span>,
                                            Welcome to Perpetual - SDMS
                                            | You must be a registered user to use this tool.'
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Home;