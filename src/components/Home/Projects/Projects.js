import React from 'react';
import { useEffect, useState } from 'react';
import ProjectsMain from '../ProjectsMain/ProjectsMain';

const Projects = () => {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        fetch('https://sheltered-coast-56902.herokuapp.com/events')
        .then(res=>res.json())
        .then(data =>{
            setEvents(data);
        })
    }, [])
    return (
        <section className="services-container mt-5 my-5">
            <div className="text-center mt-5 pt-5">
                <h2>Our Done Projects</h2>
            </div>
            <div className="d-flex justify-content-center">
            <div className="w-75 row mt-5 pt-5">
            {
                    events.map(event=><ProjectsMain event={event}></ProjectsMain>)
                }
            </div>
        </div>
        </section>
    );
};

export default Projects;