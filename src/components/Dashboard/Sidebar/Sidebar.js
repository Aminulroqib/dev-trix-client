import React, { useContext, useEffect, useState } from 'react';
import { Link, Router } from 'react-router-dom';
import './Sidebar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt, faShoppingBag, faCartPlus, faUsers, } from '@fortawesome/free-solid-svg-icons';
import { faFileAlt } from '@fortawesome/free-regular-svg-icons'
import { faPlus, faList, faPlusSquare, faSquare } from '@fortawesome/free-solid-svg-icons';
import { UserContext } from '../../../App';


const Sidebar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [isAdmin, setIsAdmin] = useState(false);

    useEffect(() => {
        fetch('https://sheltered-coast-56902.herokuapp.com/isAdmin', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({email: loggedInUser.email})
        })
            .then(res => res.json())
            .then(data => {
                setIsAdmin(data);
            })

    }, [])
    return (
        <div className="sidebar d-flex flex-column justify-content-between col-md-2 py-5 px-4" style={{ height: "100vh" }}>
            <ul className="list-unstyled text-decoration-none">
                <li>
                    <Link to="/" className="text-decoration-none text-white">
                        <FontAwesomeIcon icon={faUsers} /> <span>{loggedInUser.name}</span>
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
               { isAdmin && <div>
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
                </div>}
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