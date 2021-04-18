import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog, faSignOutAlt, faCalendar, faGripHorizontal, faUsers, faUserPlus, faList, faPen, faUsersCog, faTasks } from '@fortawesome/free-solid-svg-icons';
import { faFileAlt } from '@fortawesome/free-regular-svg-icons'
import { UserContext } from '../../../App';

const Sidebar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [isAdmin, setIsAdmin] = useState(false);

    useEffect(() => {
        fetch('https://warm-stream-38271.herokuapp.com/isAdmin', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ email: loggedInUser.email })
        })
            .then(res => res.json())
            .then(data => setIsAdmin(data))
    }, [])

    return (
        <div className="sidebar d-flex flex-column justify-content-between py-5 px-4" style={{ height: "100vh"}}>
            <ul className="list-unstyled">
                <li>
                    <Link to="/dashboard/book" className="text-white">
                        <FontAwesomeIcon icon={faGripHorizontal} /> <span>Book</span>
                    </Link>
                </li>
                <li>
                    <Link to="/dashboard/bookingList" className="text-white">
                        <FontAwesomeIcon icon={faList} /> <span>Booking list</span>
                    </Link>
                </li>
                <li>
                    <Link to="/dashboard/userReview" className="text-white">
                        <FontAwesomeIcon icon={faPen} /> <span>Review</span>
                    </Link>
                </li>

                {isAdmin && <div>
                    <li>
                        <Link to="/dashboard/orderList" className="text-white">
                            <FontAwesomeIcon icon={faList} /> <span>Order list</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/dashboard/addService" className="text-white">
                            <FontAwesomeIcon icon={faUserPlus} /> <span>Add Service</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/dashboard/makeAdmin" className="text-white">
                            <FontAwesomeIcon icon={faUsersCog} /> <span>Make Admin</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/dashboard/manageService" className="text-white">
                            <FontAwesomeIcon icon={faTasks} /> <span>Manage Services</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/dashboard/setting" className="text-white" >
                            <FontAwesomeIcon icon={faCog} /> <span>Setting</span>
                        </Link>
                    </li>
                </div>}
            </ul>
            <div>
                <Link to="/" className="text-white"><FontAwesomeIcon icon={faSignOutAlt} /> <span>Logout</span></Link>
            </div>
        </div>
    );
};

export default Sidebar;