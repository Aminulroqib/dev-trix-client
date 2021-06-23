import React from 'react';

const Testimonial = (props) => {
    const { quote, name, from, img } = props.testimonial;
    return (
        <section>

            <div className="col-md-4 d-flex float-start mb-5 py-5">
            <div class="card mx-3 my-3">
                <img style={{ width:'60px'}} src={img} class="card-img-top mx-3 my-3" alt="..."/>
                    <div class="mx-2">
                            <h6 className="text-brand">{name}</h6>
                            <p className="m-0 fw-bold">{from}</p>
                            <p className="card-text text-left">{quote}</p>
                        </div>
            </div>

            </div>

        </section>

            );
};

            export default Testimonial;