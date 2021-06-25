import React from 'react';
import { Link } from 'react-router-dom';

const ServicesDetail = ({event}) => {
    console.log(event)
    return (
        <div className="col-md-4 text-center border p-2 float-start">
            <img className="p-3" style={{height: '150px'}} src={event.imageURL} alt="" />
            <h5 className="mt-4 mb-3">{event.name}</h5>
            <p className="text-secondary">{event.description}</p>
            <Link to='/book' className="btn btn-brand text-white">Buy Now</Link>
        </div>
    );
};

export default ServicesDetail;