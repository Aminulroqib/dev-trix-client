import React from 'react';
import Sidebar from '../../Dashboard/Sidebar/Sidebar'
import BookingCard from '../BookingCard/BookingCard';

const BookingList = () => {
    return (
        <div className="container-fluid row">
        <div className="col-md-3">
            <Sidebar></Sidebar>
        </div>
        <div className="col-md-6 my-5">
            <BookingCard></BookingCard>
        </div>
        
    </div>
    );
};

export default BookingList;