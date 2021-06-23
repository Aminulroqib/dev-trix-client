import React from 'react';
import { Link, Router} from 'react-router-dom';
import './Sidebar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt, faShoppingBag, faCartPlus, faUsers, } from '@fortawesome/free-solid-svg-icons';
import {  faFileAlt } from '@fortawesome/free-regular-svg-icons'


const Sidebar = () => {
    return (
        <div className="sidebar d-flex flex-column justify-content-between col-md-2 py-5 px-4" style={{height:"100vh"}}>
        <ul className="list-unstyled text-decoration-none">
        <li>
                <Link to="/" className="text-decoration-none text-white">
                    <FontAwesomeIcon icon={faUsers} /> <span>Home</span> 
                </Link>
            </li>
            <li>
                <Link to="/book" className="text-decoration-none text-white">
                    <FontAwesomeIcon icon={faCartPlus} /> <span>Book</span> 
                </Link>
            </li>
            <li>
                <Link to="/bookinglist" className="text-white text-decoration-none">
                    <FontAwesomeIcon icon={faShoppingBag} /> <span>Booking List</span> 
                </Link>
            </li>
            <li>
                <Link to="/review" className="text-white text-decoration-none">
                    <FontAwesomeIcon icon={faFileAlt} /> <span>Review</span>
                </Link>
            </li>
        </ul>
        <div>
            <Link to="/" className="text-white text-decoration-none"><FontAwesomeIcon icon={faSignOutAlt} /> <span>Logout</span></Link>
        </div>
    </div>
    );
};

export default Sidebar;