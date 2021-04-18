import React, { useEffect, useState } from 'react';
import BookListCard from './../BookListCard/BookListCard';

const BookingList = () => {
    const [serviceList, setServiceList] = useState([]);

    useEffect(() => {
        fetch('https://warm-stream-38271.herokuapp.com/orderList')
            .then(result => result.json())
            .then(data => setServiceList(data))
    }, [])

    return (
        <section className="mt-5">
            <h2 className="mb-4">Service List</h2>
            <div className="row mb-5">
                {
                    serviceList.map(service => <BookListCard service={service}></BookListCard>)
                }
            </div>
        </section>
    );
};

export default BookingList;