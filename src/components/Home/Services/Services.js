import React, { useEffect, useState } from 'react';
import ServiceCard from './../Service/ServiceCard';


const Services = () => {
    const [services, setServices] = useState([]);
    console.log(services);
    useEffect(() => {
        fetch('https://warm-stream-38271.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <section className="doctors">
            <div className="container">
                <h2 className="text-center p-2">What Kind of Repairs Can We Do?</h2>
                <p className="text-center text-secondary pb-4">Our company can carry out all types of repairs for
                  mobile devices, including:</p>
                <div className="row">
                    {
                        services.map(service => <ServiceCard key={service._id} service={service}></ServiceCard>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Services;