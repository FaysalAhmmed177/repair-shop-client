import React from 'react';
import { useForm } from 'react-hook-form';
import './MakeAdmin.css'

const MakeAdmin = () => {
    const { register, handleSubmit, watch, errors } = useForm();

    const onSubmit = data => {
        const eventData = {
            name: data.name,
            description: data.description,
            price: data.price
        };
    }

    return (
            <div className="col-md-9 p-5 mt-5 text-white makeAdmin">
                <h1 className=" mb-5">Make Admin<hr /> </h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <b><label htmlFor="" >Email</label></b><br />
                    <input name="name" className="mr-5 form-control w-75" placeholder="join@gmail.com" ref={register} />
                    <br /> <input className="btn btn-primary" type="submit" />
                </form>
            </div>
    );
};

export default MakeAdmin;