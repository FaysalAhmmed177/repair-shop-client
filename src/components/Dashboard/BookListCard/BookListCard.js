import React from 'react';

const BookListCard = () => {
    return (
        <div className="col-md-4 pb-5  d-flex justify-content-center">
            <div className="card" style={{ border: 'none' }}>
                <img src="" style={{ width: '100px', height: '100px', backgroundColor: 'lightblue' }} className="rounded" alt="" />
                <div class="card-body">
                    <h3>Service name</h3>
                    <p>Service description</p>
                </div>
            </div>
        </div>
    );
};

export default BookListCard;