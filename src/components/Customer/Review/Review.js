import React, { useState } from 'react';
import axios from 'axios';
import { useForm } from "react-hook-form";
import Sidebar from '../../Dashboard/Sidebar/Sidebar'

const Review = () => {
    // const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [info, setInfo] = useState({});
    const [file, setFile] = useState(null);

    const handleBlur = e => {
        const newInfo = { ...info };
        newInfo[e.target.name] = e.target.value;
        setInfo(newInfo);
    }


    const handleFileChange = (e) => {
        const newFile = e.target.files[0]
        setFile(newFile);
    }
    const handleSubmit = () => {
        const formData = new FormData();
        formData.append('file', file);
        formData.append('name', info.name);
        formData.append('company', info.company);
        formData.append('description', info.description);

        fetch('http://localhost:5000/addReview', {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(data => {
                console.log(data)
            })
            .catch(error => {
                console.error(error)
            })
        // const reviewData = {
        //     name: data.name,
        //     company: data.company,
        //     description: data.description,
        //     imageURL: imageURL
        // }
        // const url = `http://localhost:5000/addReview`
        // console.log(reviewData);
        // fetch(url, {
        //     method: 'POST',
        //     headers: {
        //         'content-type': 'application/json'
        //     },
        //     body: JSON.stringify(reviewData)
        // })
        //     .then(res => {
        //         console.log('server side response', res);
        //     })
    }

    // const handleReviewUpload = review =>{
    //     console.log(review.target.files[0])
    //     const imgData = new FormData();
    //     imgData.set('key', '20898c4d2f5440cd42a6b3f439e39df8');
    //     imgData.append('image', review.target.files[0]);
    //     axios.post('https://api.imgbb.com/1/upload', imgData)
    //         .then(response => {
    //             setImageURL(response.data.data.display_url);
    //         })
    //         .catch(function (error) {
    //             console.log(error);
    //         });

    // }

    return (
        <section className="container-fluid row">
            <div className="col-md-3">
                <Sidebar></Sidebar>
            </div>
            <div className="col-md-6 my-5" >
                <h1>Review</h1>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Name</label>
                        <input onBlur={handleBlur} type="name" className="form-control" name="name" placeholder="Enter Name" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Company/Organisation</label>
                        <input onBlur={handleBlur} type="text" className="form-control" name="company" placeholder="Company" />
                    </div>
                    <div class="form-group">
                        <label for="exampleFormControlTextarea1">Write Your Reviews</label>
                        <textarea onBlur={handleBlur} class="form-control" name='description' rows="3"></textarea>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Upload a image</label>
                        <input onChange={handleFileChange} type="file" className="form-control" id="exampleInputPassword1" placeholder="Picture" />
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>

        </section>
    );
};

export default Review;