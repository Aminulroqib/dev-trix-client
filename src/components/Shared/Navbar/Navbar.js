import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-light">
            <div class="container-fluid">
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <h2 style={{color:'#3A4256'}} class="ms-5">Dev Trix</h2>
                    <ul class="navbar-nav ms-auto mx-5 px-5">
                        <li class="nav-item">
                            <Link class="nav-link active ms-3" aria-current="page" href="#">Home</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link ms-3" to='/dashboard'>Dashboard</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link ms-3" to='/admin'>Admin</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link ms-3" href="#">Our Portfolio</Link>
                        </li>
                        <li className="nav-item">
                        <Link className="btn btn-brand nav-link mr-5 text-white" to="/login">Login</Link>
                    </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;