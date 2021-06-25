import React, { useEffect, useState } from 'react';
import Testimonial from '../Testimonial/Testimonial';

const Testimonials = () => {
    const [testimonialData, setTestimonialData] = useState([])

    useEffect(() => {
        fetch('https://sheltered-coast-56902.herokuapp.com/reviews')
        .then(res=>res.json())
        .then(data =>{
            setTestimonialData(data);
        })
    }, [])

    return (
        <section className="testimonials my-5 py-5">
            <div className="container">
                <div className="section-header">
                    <h5 style={{color: '#cbb4d4'}} className="text-center text-brand text-uppercase">Testimonial</h5>
                    <h1 className="text-center">What Our Clients <br /> Says </h1>
                </div>
                <div className="card-deck mt-5 mb-5">
                    {
                        testimonialData.map(testimonial => <Testimonial testimonial={testimonial} key={testimonial.name} />)
                    }
                </div>
            </div>
        </section>
    );
};

export default Testimonials;