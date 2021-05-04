import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'
import { UserContext } from './../../../App';

const Navbar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    console.log(loggedInUser.displayName);
    return (
        <nav class="navbar navbar-expand-lg navbar-light" style={{backgroundColor: '#6b61ee', color: 'white'}}>
            <div class="container">
                <h2>Repair Shop </h2>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                    <div class="navbar-nav">

                        <Link to="/home" className="">Home</Link>
                        <Link to="/dashboard" className="">Dashboard</Link>
                        <Link to="/blogs" className="">Blogs</Link>
                        <Link to="/contact" className="">Contact Us</Link>
                        {
                            loggedInUser.displayName? <a href="#" style={{backgroundColor: 'gray', padding: '5px'}}>{loggedInUser.displayName}</a>
                            : <Link to="/login" className=""><button className="btn btn-danger rounded-pill">Login</button></Link>
                        }

                    </div>
                </div>

            </div>
        </nav>
    );
};

export default Navbar;