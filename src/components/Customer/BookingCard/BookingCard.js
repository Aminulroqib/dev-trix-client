import React from 'react';

const BookingCard = () => {
    return (
        <section>

            <div className="col-md-6 d-flex float-start mb-5 py-5 px-3">
                <div class="card" style={{width:"18rem;"}}>
                    <img src="..." class="card-img-top" alt="..."/>
                        <div class="card-body">
                            <h5 class="card-title">Portfolio</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                </div>
            </div>
            <div className="col-md-6 d-flex float-start mb-5 py-5 px-3">
                <div class="card" style={{width:"18rem;"}}>
                    <img src="..." class="card-img-top" alt="..."/>
                        <div class="card-body">
                            <h5 class="card-title">Business</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                </div>
            </div>
    </section>
            );
};

            export default BookingCard;