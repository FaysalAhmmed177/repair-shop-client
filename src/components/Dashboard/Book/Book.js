import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import PaymentProcess from '../PaymentProcess/PaymentProcess';

const Book = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const [service, setService] = useState({});
    const { id } = useParams();

    useEffect(() => {
        fetch(`https://warm-stream-38271.herokuapp.com/service/${id}`)
            .then(result => result.json())
            .then(data => setService(data));
    }, [])

    const onSubmit = data => {
        const eventData = {
            name: data.name,
            description: data.email,
            price: data.service
        };
    }

    return (
        <div className="mt-3">
            <h1>Book</h1>
            <div>
                <h3 className="text-danger">You have selected for {service.name}</h3>
                <p className="text-secondary">Your service charge will be {service.price}</p>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input name="name" className="form-control w-50" placeholder="Name" ref={register} /><br />
                <input name="email" className="form-control w-50" placeholder="Email" ref={register} /><br />
                <input name="service" className="form-control w-50" placeholder="Service name" ref={register} /><br />
                <input className="btn btn-primary mb-2" type="submit" />
            </form>
            <div>
                <PaymentProcess service={service} />
            </div>
        </div>
    );
};

export default Book;