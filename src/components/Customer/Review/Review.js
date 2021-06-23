import React from 'react';
import Sidebar from '../../Dashboard/Sidebar/Sidebar'

const Review = () => {
    return (
        <section className="container-fluid row">
            <div className="col-md-3">
                <Sidebar></Sidebar>
            </div>
            <div className="col-md-6 my-5" >
                <h1>Review</h1>
                <form className=''>
                    <div class="mb-3">
                        <label for="name" class="form-label" placeholder="Name">Name</label>
                        <input type="name" class="form-control" />
                    </div>
                    <div class="mb-3">
                        <label for="company" class="form-label" placeholder="Your Company or Organization">Company/Oragnization</label>
                        <input type="name" class="form-control" />
                    </div>
                    <div class="form-group">
                        <label for="exampleFormControlTextarea1">Description</label>
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>

                    <br />
                    <button type="submit" class="btn btn-brand text-white">Submit</button>
                </form>
            </div>
        </section>
    );
};

export default Review;