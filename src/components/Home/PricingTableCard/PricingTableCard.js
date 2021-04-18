import React from 'react';
import './PricingTableCard.css'

const PricingTableCard = ({ data }) => {
    return (
        <div className="col-md-3 pb-5 text-center  d-flex justify-content-center">
            <div className="card h-100 pricingCardStyle" style={{ border: 'none' }}>
                <div class="card-header bg-primary">
                    <h3>{data.name}</h3>
                    <h4>{data.type}</h4>
                </div>
                <div class="card-body">
                    <h4>{data.price}</h4>
                    <p>{data.description}</p>
                </div>
            </div>
        </div>
    );
};

export default PricingTableCard;