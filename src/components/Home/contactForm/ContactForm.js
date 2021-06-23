import React from 'react';
import { useForm } from "react-hook-form";

const ContactForm = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <section className="my-5">
            
            <h2 className="mt-5 mb-5 text-center my-5 p-5">Contact Form</h2>
            <div style={{background: '#cbb4d4'}} className="align-items-center">
            <form className='col-md-6 mx-5 ms-5'>
                <div class="mb-3">
                    <label for="name" class="form-label text-white">Name</label>
                    <input type="name" class="form-control"/>
        	    </div>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label text-white">Email address</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
        	    </div>
                <div class="mb-3">
                    <label for="phone-number" class="form-label text-white">Contact Number</label>
                    <input type="phone-number" class="form-control"/>
        	    </div>
                    
                    <br/>
                    <button type="submit" class="btn btn-brand text-white">Submit</button>
            </form>
            </div>

        </section>
                    );
};

                    export default ContactForm;