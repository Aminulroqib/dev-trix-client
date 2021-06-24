import React, { useEffect, useState } from 'react';
import ServicesDetail from '../ServicesDetail/ServicesDetail';
import portfolio from '../../../images/portfolio.jpg'
import business from '../../../images/business.png'
import ecommerce from '../../../images/e-commerce.png'


const Services = () => {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/events')
        .then(res=>res.json())
        .then(data =>{
            setEvents(data);
        })
    }, [])
  
    return (
        <section className="services-container mt-5">
            <div className="text-center">
                <h5 style={{color: '#cbb4d4'}}>OUR SERVICES</h5>
                <h2>Services We Provide</h2>
            </div>
            <div className="d-flex justify-content-center">
            <div className="w-75 row mt-5 pt-5">
            {
                    events.map(event=><ServicesDetail event={event}></ServicesDetail>)
                }
            </div>
        </div>
        </section>
    );
};

export default Services;