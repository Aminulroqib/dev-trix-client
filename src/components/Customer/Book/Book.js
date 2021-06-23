import React from 'react';
import ProcessPayment from '../ProcessPayment/ProcessPayment'
import Sidebar from '../../Dashboard/Sidebar/Sidebar'

const Book = () => {
    return (
        <div className="container-fluid row">
        <div className="col-md-3">
            <Sidebar></Sidebar>
        </div>
        <div className="col-md-6 my-5">
            <ProcessPayment></ProcessPayment>
        </div>
        
    </div>
    );
};

export default Book;