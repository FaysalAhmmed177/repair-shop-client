import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import SplitCardForm from './SplitCardForm';
import creditCard from '../../../images/credit-card.png'

const stripePromise = loadStripe('pk_test_51Ie3YJIS8SqN8VEztDSAaepb4YdEYjTVbDWOd5J71rlqT1xYzfcXOWXSnrshK2aqLwA00Fn8jS72XMOYytojc4p4000m8eDz1t');

const PaymentProcess = () => {
    return (
        <Elements stripe={stripePromise}>
            <h6 className="text-secondary">Pay with</h6>
            <input type="radio" checked="checked" /> <img style={{ height: '35px' }} src={creditCard} alt="" /> <b><label htmlFor="">Credit Card</label></b>
            <SplitCardForm ></SplitCardForm>
        </Elements>
    );
};

export default PaymentProcess;