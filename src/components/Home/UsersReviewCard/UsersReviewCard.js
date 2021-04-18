import React, { useContext } from 'react';
import { UserContext } from './../../../App';

const UsersReviewCard = ({ review }) => {
    console.log(review.loggedInUser.photoURL);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    //console.log(review);

    return (
        <div className="col-md-4 " style={{marginBottom: '80px'}}>
            <div className="card text-center" style={{ height: '350px' }}>
                <div className="p-3">
                    <img className="rounded-pill" src={review.loggedInUser.photoURL} style={{ height: '100px', width: '100px' }} alt="" />
                </div>
                <div className="card-body">
                    <h4>{review.name}</h4>
                    <p className="text-secondary">{review.designation}</p>
                    <p className="text-secondary">{review.description}</p>
                </div>
            </div>
        </div>
    );
};

export default UsersReviewCard;