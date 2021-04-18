import React, { useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import { useForm } from 'react-hook-form';
import './AddService.css'

const AddService = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const [info, setInfo] = useState({});
    const [file, setFiles] = useState(null);

    const handleFileChange = (e) => {
        const newFile = e.target.files[0];
        console.log(newFile);
        setFiles(newFile);
    }

    const onSubmit = data => {
        const formData = new FormData();
        console.log(file);
        formData.append('file', file);
        formData.append('name', data.name);
        formData.append('description', data.description);
        formData.append('price', data.price);

        fetch('https://warm-stream-38271.herokuapp.com/addAService', {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(data => {
                alert('Service added successfully')
            })
            .catch(error => {
                console.error('Error',error)
            })
        
    }

    return (
        <section className="row mt-5">
            <div className="col-md-9 p-5 text-center addService">
                <h1 className="text-center mb-5">Add Service <hr /> </h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input name="name" className="mr-5" placeholder="Enter Title" ref={register} />

                    <input name="price" placeholder="price" ref={register} /><br /><br />

                    <input style={{ marginLeft: '75px' }} className="" type="text" name="description" placeholder="Enter description" ref={register} />
                    <input onChange={handleFileChange} style={{ marginLeft: '15px', marginRight: '0px' }}  type="file" name="exampleRequired" />
                    <br /><br />
                    <div >
                        <span>
                            <input className="btn btn-primary" type="submit" />
                        </span>
                    </div>
                    <br /><br />
                </form>
            </div>
        </section>
    );
};

export default AddService;