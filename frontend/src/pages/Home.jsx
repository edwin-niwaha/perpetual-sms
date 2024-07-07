import React from 'react';
import NavBar from "../components/NavBar";

const Home = () => {
    return (
        <div>
            <NavBar />
            <div className="container-fluid">
                <h2>Home</h2>
                <p>Welcome to the Home Page!</p>
            </div>
        </div>
    );
};

export default Home;