import React from 'react';
import ServiceAreaDetails from '../ServiceAreaDetails/ServiceAreaDetails';
import smartPhone from '../../../images/smartphone.png';
import mouse from '../../../images/mouse.png';
import microchip from '../../../images/microchip.png';
import gaming from '../../../images/gamming.jpg';
import dataRecovery from '../../../images/data-recovery.png';
import lightBulb from '../../../images/lightbulb.png';


const ServiceArea = () => {
    const servicesArea = [
        {
            name: "Smartphone Repair",
            img: smartPhone,
            description: "If your phone has a broken a front glass, non-responsive buttons, a broken camera we can fix it in house.."
        },
        {
            name: "Computer Repair",
            img: mouse,
            description: "Repair technician will work with five general categories of hardware, desktop, computers, laptop, servers."
        },
        {
            name: "Electronics Repair",
            img: microchip,
            description: "We repair appliances of any manufacturer in the shortest possible time.We give a guarantee.."
        },
        {
            name: "Console Repair",
            img: gaming,
            description: "We will be able to quickly and easily repair your console or your favorite gaming console, trust only professionals.."
        },
        {
            name: "Electronics Recovery",
            img: dataRecovery,
            description: "We are engaged in the restoration of any type of technology , as a result of drawing or overheating are not.."
        },
        {
            name: "Check before purchase",
            img: lightBulb,
            description: "If you want to bye a use equipment, but you are not sure if it is correct, check it out with us, only quality product.."
        },
    ]
    return (
        <section className="container mt-5">
            <h2 className="text-center p-5">Our Service Area</h2>
            <div className="row mb-5 ">
                {
                    servicesArea.map(serviceArea => <ServiceAreaDetails serviceArea={serviceArea}></ServiceAreaDetails>)
                }
            </div>
        </section>
    );
};

export default ServiceArea;