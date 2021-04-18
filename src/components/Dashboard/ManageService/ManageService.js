import React, { useEffect, useState } from 'react';
import './ManageServices.css';
import DeleteIcon from '@material-ui/icons/Delete';
import axios from 'axios';
import { toast } from 'react-toastify';

const ManageService = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('https://warm-stream-38271.herokuapp.com/services')
            .then(response => response.json())
            .then(data => {
                setServices(data);
                //console.log(data);
            })
    }, []);

    const handleDelete = (id) => {
        console.log('Delete item', id);
        axios.delete(`https://warm-stream-38271.herokuapp.com/delete/${id}`)
            .then((res) => {
                console.log(res);
                toast.warning('Delete Successfully');
            })
    }

    return (
        <div className="container p-3 text-center">
            <h1 className="mt-3 mb-3 text-left">Manage Services</h1>

            <table className="table">
                <thead>
                    <tr className="bg-primary">
                        <th>Service</th>
                        <th>Price</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {services.map(service =>

                        <tr>
                            <td>{service.name}</td>
                            <td>{service.price}</td>
                            <td><button className="btn btn-danger">< DeleteIcon onClick={() => handleDelete(service._id)} /></button></td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default ManageService;