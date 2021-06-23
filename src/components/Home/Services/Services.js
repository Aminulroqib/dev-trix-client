import React from 'react';
import ServicesDetail from '../ServicesDetail/ServicesDetail';
import portfolio from '../../../images/portfolio.jpg'
import business from '../../../images/business.png'
import ecommerce from '../../../images/e-commerce.png'


const Services = () => {
    const serviceData = [
        {
            name: 'Portfolio Website',
            img: portfolio
        },
        {
            name: 'Business Website',
            img: business
        },
        {
            name: 'E-commerce Website',
            img: ecommerce
        }
    ]
    return (
        <section className="services-container mt-5">
            <div className="text-center">
                <h5 style={{color: '#cbb4d4'}}>OUR SERVICES</h5>
                <h2>Services We Provide</h2>
            </div>
            <div className="d-flex justify-content-center">
            <div className="w-75 row mt-5 pt-5">
                {
                    serviceData.map(service => <ServicesDetail service={service} key={service.name}></ServicesDetail>)
                }
            </div>
        </div>
        </section>
    );
};

export default Services;