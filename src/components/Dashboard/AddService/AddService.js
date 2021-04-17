import React from 'react';
import Sidebar from '../Sidebar/Sidebar';
import { useForm } from 'react-hook-form';
import './AddService.css'

const AddService = () => {
    const { register, handleSubmit, watch, errors } = useForm();

    const onSubmit = data => {
        const eventData = {
            name: data.name,
            description: data.description,
            price: data.price
        };
    }

    return (
        <section className="row mt-5">
            <div className="col-md-9 p-5 text-center addService">
                <h1 className="text-center mb-5">Add Service <hr /> </h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input name="name" className="mr-5" placeholder="Enter Title" ref={register} />

                    <input name="price" placeholder="price" ref={register} /><br /><br />

                    <input style={{ marginLeft: '75px' }} className="" type="text" name="description" placeholder="Enter description" ref={register} />
                    <input style={{ marginLeft: '15px', marginRight: '0px' }} className="" name="exampleRequired" type="file" />
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