import React from 'react';

const BookListCard = ({ service }) => {
    console.log(service.service.image);
    return (
        <div className="col-md-4">
            <div className="card" style={{backgroundColor: 'lightgray', padding: '10px'}}>
                <img className="text-center" src={`data:image/png;base64,${service.service.image.img}`} style={{ height: '100px', width: '150px'}} alt="" />
                <div>
                <h4 className="mb-3">{service.service.name}</h4>
                <p className="mb-3">{service.service.description}</p>
                </div>
            </div>
        </div>
    );
};

export default BookListCard;