import React from 'react';
import header from "../../../images/header.jpg"
const HeaderMain = () => {
    return (
        <div>
            <main style={{height:'500px'}} className="row d-flex align-items-center">
            <div className="col-md-4 offset-md-1">
                <h1 style={{color:'#20002c'}}>Your Dev Solution <br/>Starts Here</h1>
                <p className="tex-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime nihil quae minus fugit non dignissimos?</p>
                <div className="btn btn-brand text-white">GRAB YOUR SITE</div>

            </div>
            <div className="col-md-6">
                <img style={{border: '1px solid'}} src={header} alt="" className="img-fluid" />
            </div>
        </main>
        </div>
    );
};

export default HeaderMain;