import React from 'react';
import { useForm } from 'react-hook-form';
import PaymentProcess from '../PaymentProcess/PaymentProcess';

const Book = () => {
    const { register, handleSubmit, watch, errors } = useForm();

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
            <form onSubmit={handleSubmit(onSubmit)}>
                <input name="name" className="form-control w-50" placeholder="Name" ref={register} /><br/>
                <input name="email" className="form-control w-50" placeholder="Email" ref={register} /><br />
                <input name="service" className="form-control w-50" placeholder="Service name" ref={register} /><br />
                <input className="btn btn-primary mb-2" type="submit" />
            </form>
            <div>
                <PaymentProcess />
            </div>
        </div>
    );
};

export default Book;