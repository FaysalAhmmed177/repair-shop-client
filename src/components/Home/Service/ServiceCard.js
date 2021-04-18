import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css'

const ServiceCard = ({ service }) => {
    return (
        <div className="col-md-4">
            <Link to={`/dashboard/book/${service._id}`}>
                <div className="card text-center cardStyle mb-5">
                    <img className="img-fluid mb-3" style={{ height: '200px', width: '100%' }}
                        src={`data:image/png;base64,${service.image.img}`} alt="" />
                    <div className="card-body">
                        <h4>{service.name}</h4>
                        <h3>{service.price}</h3>
                        <p className="text-secondary">{service.description}</p>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default ServiceCard;