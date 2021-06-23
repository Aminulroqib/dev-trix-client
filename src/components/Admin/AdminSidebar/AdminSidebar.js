import React from 'react';
import { Link, Router} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt, faPlus, faList, faUsers, faPlusSquare, faSquare } from '@fortawesome/free-solid-svg-icons';


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
                <Link to="/orderlist" className="text-decoration-none text-white">
                    <FontAwesomeIcon icon={faList} /> <span>Order List</span> 
                </Link>
            </li>
            <li>
                <Link to="/addservice" className="text-white text-decoration-none">
                    <FontAwesomeIcon icon={faPlus} /> <span>Add Service</span> 
                </Link>
            </li>
            <li>
                <Link to="/makeadmin" className="text-white text-decoration-none">
                    <FontAwesomeIcon icon={faPlusSquare} /> <span>Make Admin</span>
                </Link>
            </li>
            <li>
                <Link to="/manage" className="text-white text-decoration-none">
                    <FontAwesomeIcon icon={faSquare} /> <span>Manage Service</span>
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