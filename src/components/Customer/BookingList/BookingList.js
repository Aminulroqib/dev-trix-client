import React, { useEffect, useState } from 'react';
import Sidebar from '../../Dashboard/Sidebar/Sidebar'
import BookingCard from '../BookingCard/BookingCard';

const BookingList = () => {
    const [bookings, setBookings] = useState([]);

    useEffect(() => {
        fetch('https://sheltered-coast-56902.herokuapp.com/events')
        .then(res=>res.json())
        .then(data =>{
            console.log(data);
        })
    }, [])
  

    return (
        <div className="container-fluid row">
        <div className="col-md-3">
            <Sidebar></Sidebar>
        </div>
        <div className="col-md-6 my-5">
            <h2>Your Booking List</h2>
                <BookingCard></BookingCard>
        </div>
        
    </div>
    );
};

export default BookingList;