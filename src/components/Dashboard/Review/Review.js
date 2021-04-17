import React from 'react';
import { useForm } from 'react-hook-form';

const Review = () => {
    const { register, handleSubmit, watch, errors } = useForm();

    const onSubmit = data => {
        const eventData = {
            name: data.name,
            description: data.description,
            price: data.price
        };
    }

    return (
        <div className="mt-5 p-5" style={{backgroundColor: 'gray', width: '600px', borderRadius: '30px'}}>
            <h1 className="text-white mb-3">Review</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input name="name" className="mr-5 form-control w-75" placeholder="Your Name" ref={register} />
                <br /> <input name="name" className="mr-5 form-control w-75" placeholder="Company's name.Designation" ref={register} />
                <br /> <textarea type="text-area" name="name" className="mr-5 form-control w-75" placeholder="Description" ref={register} />
                <br /> <input className="btn btn-primary btn-lg" type="submit" />
            </form>
        </div>
    );
};

export default Review;