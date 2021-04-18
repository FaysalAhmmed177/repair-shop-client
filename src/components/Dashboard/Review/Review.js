import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { UserContext } from './../../../App';

const Review = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const { register, handleSubmit, watch, errors } = useForm();

    const onSubmit = data => {
        const eventData = {
            name: data.name,
            designation: data.designation,
            description: data.description
        };
        const newData = {loggedInUser,...eventData}
        console.log(newData);
        const url = `https://warm-stream-38271.herokuapp.com/usersReview`;
        

        fetch(url, {
            method: 'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newData)
        })
        .then(res => {
            console.log('server side response', res);
            alert("Review send successfully")
        });
    }

    return (
        <div className="mt-5 p-5" style={{ backgroundColor: 'gray', width: '600px', borderRadius: '30px' }}>
            <h1 className="text-white mb-3">Review</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input name="name" className="mr-5 form-control w-75" placeholder="Your Name" ref={register} />
                <br /> <input name="designation" className="mr-5 form-control w-75" placeholder="Company's name.Designation" ref={register} />
                <br /> <textarea type="text-area" name="description" className="mr-5 form-control w-75" placeholder="Description" ref={register} />
                <br /> <input className="btn btn-primary btn-lg" type="submit" />
            </form>
        </div>
    );
};

export default Review;