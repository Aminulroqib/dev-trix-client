import React, { useState } from 'react';
import axios from 'axios';
import { useForm } from "react-hook-form";
import Sidebar from '../../Dashboard/Sidebar/Sidebar';


const AddService = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [imageURL, setImageURL] = useState();
    const onSubmit = data => {
        const eventData = {
            name: data.name,
            description: data.description,
            imageURL: imageURL
        }
        const url = `http://localhost:5000/addEvent`
        console.log(eventData);
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(eventData)
        })
            .then(res => {
                console.log('server side response', res);
            })
    }

    const handleImageUpload = event => {
        console.log(event.target.files[0])
        const imageData = new FormData();
        imageData.set('key', 'fef588b4ac902105dd548a74355aaf03');
        imageData.append('image', event.target.files[0]);
        axios.post('https://api.imgbb.com/1/upload', imageData)
            .then(function (response) {
                setImageURL(response.data.data.display_url);
            })
            .catch(function (error) {
                console.log(error);
            });

    }

    return (
        <section className="container-fluid row">
            <Sidebar></Sidebar>
            <div className="col-md-9 my-5 pr-5" style={{ position: "absolute", right: 0, backgroundColor: "#F4FDFB" }}>
                <h5 className="text-brand">Add a Service</h5>
                <br />
                <form onSubmit={handleSubmit(onSubmit)}>
                    <label className="mb-3">Service Name</label>
                    <br/>
                    <input className='mb-3 form-control' name='name' defaultValue="Enter Website .." {...register("name")} />
                    <br />
                        <label for="exampleFormControlTextarea1">Description</label>
                        <textarea name='description' defaultValue="You desired website..." {...register("description")} class="form-control"  rows="3"></textarea>
                    <br/>
                    <input className='mb-3 form-control' type='file' onChange={handleImageUpload} />
                    {errors.exampleRequired && <span>File</span>}
                    <br/>
                    <input className='mt-3 btn btn-brand text-white' type="submit" />
                </form>
            </div>

        </section>
    );
};

export default AddService;