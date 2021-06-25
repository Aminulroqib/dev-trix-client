import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import Sidebar from '../../Dashboard/Sidebar/Sidebar';


const MakeAdmin = () => {
    const [info, setInfo] = useState({});
    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const onSubmit = data => {
        const adminData = {
            name: data.name,
            email: data.email
        }
        const url = `https://sheltered-coast-56902.herokuapp.com/addAdmin`
        console.log(adminData);
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(adminData)
        })
            .then(res => {
                console.log('server side response', res);
            })
    }
 
    return (
        <section className="container-fluid row">
            <div className="col-md-3">
                <Sidebar></Sidebar>
            </div>
            <div className="col-md-9 my-5">
            <form onSubmit={handleSubmit(onSubmit)}>
                    <label className="mb-3">Email</label>
                    <br/>
                    <input className='mb-3 form-control' name='email' placeholder='Enter Admin Email' {...register("email")} />
                    <br />
                    <label className="mb-3">Admin Name</label>
                    <br/>
                    <input className='mb-3 form-control' name='name' placeholder='Enter Name' {...register("name")} />
                    <br/>
                    <input className='mt-3 btn btn-brand text-white' type="submit" />
                </form>
            </div>

        </section>
                    );
};

                    export default MakeAdmin;