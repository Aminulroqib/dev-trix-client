import React from 'react';
import Header from '../Header/Header';
import Testimonials from '../../Home/Testimonials/Testimonials'
import Footer from '../../Shared/Footer/Footer'
import ContactForm from '../contactForm/ContactForm';
import Projects from '../Projects/Projects';


const Home = () => {
    return (
        <div>
            <Header></Header>
            <Projects></Projects>
            <Testimonials></Testimonials>
            <ContactForm></ContactForm>
            <Footer></Footer>
        </div>
    );
};

export default Home;