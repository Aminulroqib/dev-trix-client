import React from 'react';
import Review from '../../Customer/Review/Review'

const Testimonial = ({testimonial}) => {
    return (
        <section>

            <div className="col-md-4 d-flex float-start mb-5 py-5">
            <div class="card mx-3 my-3">
            {
            testimonial.image ? <img style={{height: '200px'}} src={`data:image/png;base64,${testimonial.image.img}`}/>
            :
            <img style={{height: '200px'}} className="img-fluid mb-3" src={`http://localhost:5000/${testimonial.img}`} alt=""/>
        }
                {/* <img style={{ width:'60px'}} class="card-img-top mx-3 my-3" alt="..."/> */}
                    <div class="mx-2">
                            <h6 className="text-brand">{testimonial.name}</h6>
                            <p className="m-0 fw-bold">{testimonial.companyName}</p>
                            <p className="card-text text-left">{testimonial.description}</p>
                        </div>
            </div>

            </div>

        </section>

            );
};

            export default Testimonial;