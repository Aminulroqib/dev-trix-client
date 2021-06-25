import React from 'react';
import { Link } from 'react-router-dom';

const ProjectsMain = ({event}) => {
    return (
        <div className="col-md-4 text-center border p-2">
        <img className="p-3" style={{height: '180px'}} src={event.imageURL} alt="" />
        <h5 className="mt-4 mb-3">{event.name}</h5>
        <p className="text-secondary">{event.description}</p>
        <Link to='/review' className="btn btn-outline-danger">Give Review of Our Work</Link>
    </div>
    );
};

export default ProjectsMain;