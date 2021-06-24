import React from 'react';

const ServicesDetail = ({event}) => {
    console.log(event)
    return (
        <div className="col-md-4 text-center">
            <img className="p-3" style={{height: '200px'}} src={event.imageURL} alt="" />
            <h5 className="mt-4 mb-3">{event.name}</h5>
            <p className="text-secondary">{event.description}</p>
            <button className="btn btn-brand text-white">Buy Now</button>
        </div>
    );
};

export default ServicesDetail;