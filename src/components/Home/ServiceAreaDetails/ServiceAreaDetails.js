import React from 'react';

const ServiceAreaDetails = (props) => {
    const serviceArea = props.serviceArea;
    return (
        <div className="col-md-4 pb-5  d-flex justify-content-center">
            <div className="card" style={{ border: 'none' }}>
                <img src={serviceArea.img} style={{ width: '100px', height: '100px', backgroundColor: 'lightblue' }} className="rounded" alt="" />
                <div class="card-body">
                    <h3>{serviceArea.name}</h3>
                    <p>{serviceArea.description}</p>
                </div>
            </div>
        </div>
    );
};

export default ServiceAreaDetails;