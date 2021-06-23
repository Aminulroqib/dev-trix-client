import React from 'react';

const ServicesDetail = ({ service }) => {
    return (
        <div className="col-md-4 text-center">
            <img className="p-3" style={{height: '200px'}} src={service.img} alt="" />
            <h5 className="mt-4 mb-3">{service.name}</h5>
            <p className="text-secondary">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam, quaerat?</p>
            <button className="btn btn-brand text-white">Buy Now</button>
        </div>
    );
};

export default ServicesDetail;