import React, { useEffect, useState } from 'react';

const OrderList = () => {
    const [orderList, setOrdersList] = useState([]);

    useEffect(() => {
        fetch('https://warm-stream-38271.herokuapp.com/orderList')
            .then(result => result.json())
            .then(data => setOrdersList(data))
    }, [])


    return (
        <div className="p-3 text-center">
            <h1 className="mt-3 mb-3 text-left">Order List</h1>
            <table className="table productTable">
                <thead>
                    <tr className="bg-primary">
                        <th>Name</th>
                        <th>Email Id</th>
                        <th>Service</th>
                        <th>Pay With</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        orderList.map(order =>
                            <tr>
                                <td>{order.loggedInUser.displayName}</td>
                                <td>{order.loggedInUser.email}</td>
                                <td>{order.service.name}</td>
                                <td>Credit Card</td>
                                <td><select id="cars" name="cars">
                                    <option value="volvo">ongoing</option>
                                    <option value="saab">pending</option>
                                    <option value="mercedes">done</option>
                                </select></td>
                            </tr>
                        )}
                </tbody>
            </table>
        </div>
    );
};

export default OrderList;