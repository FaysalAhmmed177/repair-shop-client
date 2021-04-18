import React from 'react';
import ServiceAreaDetails from '../ServiceAreaDetails/ServiceAreaDetails';
import iphone from '../../../images/iphone.png'
import samsung from '../../../images/samsung.png'
import nokia from '../../../images/nokia.png'
import sony from '../../../images/sony.png'
import blackberry from '../../../images/blackberry.png'
import lenovo from '../../../images/lenovo.png'


const ServiceArea = () => {
    const servicesArea = [
        {
            name: "Iphone",
            img: iphone,
            description: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        },
        {
            name: "Samsung",
            img: samsung,
            description: "Deiusmod tempor incididunt ut labore et dolore magna aliqua."
        },
        {
            name: "Nokia",
            img: nokia,
            description: "Do eiusmod tempor incididunt ut labore magna aliqua."
        },
        {
            name: "Sony",
            img: sony,
            description: "Sed do eiusmod tempor incididunt ut labore et dolore magna"
        },
        {
            name: "Blackberry",
            img: blackberry,
            description: "Eiusmod tempor incididunt ut labore et dolore magna atatem."
        },
        {
            name: "Lenovo",
            img: lenovo,
            description: "Usmod tempor incididunt ut labore et dolore"
        },
    ]
    return (
        <section className="container mt-5">
            <h2 className="text-center pt-5 pb-3">Smartphones that We Work With</h2>
            <p className="text-secondary text-center">Rem ipsum dolor sit amet, consectetur adipisicing
            elit, sed do eiusmod tempor incididun</p>
            <div className="row mb-5 ">
                {
                    servicesArea.map(serviceArea => <ServiceAreaDetails serviceArea={serviceArea}></ServiceAreaDetails>)
                }
            </div>
        </section>
    );
};

export default ServiceArea;