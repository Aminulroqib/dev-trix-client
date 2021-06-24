import React from 'react';
import { useForm } from "react-hook-form";

const ContactForm = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <section className="container-fluid row my-3">
            
            <div style={{background: '#cbb4d4'}} className="align-items-center">
            <h2 className="mt-5 mb-5 text-center text-white align-items-center">Contact Form</h2>
            <form className='col-md-6 mx-5 ms-5 align-items-center'>
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
                    <button type="submit" class="btn btn-brand text-white mb-5">Submit</button>
            </form>
            </div>

        </section>
                    );
};

                    export default ContactForm;