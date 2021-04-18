import React from 'react';

const ServiceAreaDetails = (props) => {
    const serviceArea = props.serviceArea;
    return (
        <div className="col-md-4 mb-4">
            <div className="card text-center p-3" style={{ border: 'none' }}>
                <div className=" d-flex justify-content-center">
                    <img src={serviceArea.img} style={{ width: '80px', height: '120px'}} className="rounded" alt="" />
                </div>
                <div class="card-body">
                    <h3>{serviceArea.name}</h3>
                    <p>{serviceArea.description}</p>
                </div>
            </div>
        </div>
    );
};

export default ServiceAreaDetails;