import React from 'react';
import Book from '../../Customer/Book/Book';
import Sidebar from '../Sidebar/Sidebar';
import ProcessPayment from '../../Customer/ProcessPayment/ProcessPayment'

const Dashboard = () => {
    return (
        <div className="container-fluid row">
            <div className="col-md-3">
                <Sidebar></Sidebar>
            </div>
            <div className="col-md-6 my-5">
               
            </div>
            
        </div>
    );
};

export default Dashboard;