import { useState, useEffect } from "react";
import NavBar from "../components/NavBar";
import "../styles/Dashboard.css"

const Dashboard = () => {
    return (
        <div>
            <NavBar />
            <div className="container-fluid">
                <h2>Dashboard</h2>
                <p>Welcome to the Dashboard!</p>
            </div>
        </div>
    );
};

export default Dashboard;
