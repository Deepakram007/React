import React from "react";
import { useNavigate } from "react-router-dom";


const Dashboard = () => {
    const username = localStorage.getItem('user');
    const navigate = useNavigate();

    const handlelogout = () => {
        localStorage.removeItem('user');
        navigate('/');
    }
    return (
        <div style={{padding:"2rem"}}>
            <h2>Welcome {username}</h2>
            <h4>These is protected dashboard</h4>
            <button onClick={handlelogout}>Logout</button>
        </div>
    );
};

export default Dashboard;