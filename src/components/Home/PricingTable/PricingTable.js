import React from 'react';
import PricingTableCard from '../PricingTableCard/PricingTableCard';

const PricingTable = () => {
    const pricingData = [
        {
            name: 'Visual inspection',
            type: 'Basic',
            price: '$50',
            description: 'Check of technique without opening, check of working capacity and visual inspection and compute'
        },
        {
            name: 'Standard',
            type: 'Diagnostics',
            price: '$45',
            description: 'Checking the machinery and performance of the units and, if necessary, disassembling'
        },
        {
            name: 'Extended',
            type: 'Diagnostics and repair',
            price: '$100',
            description: 'Guaranteed solution of any problem with your device and its diagnostics as well as help in choosing'
        },
        {
            name: 'Special',
            type: 'All in one',
            price: '$100',
            description: 'Repair of any level, including warranty repair and rough diagnostics, the price is fixed'
        },
    ];

    return (
        <div className="container">
            <h2 className="text-center mb-5 mt-5">Pricing Table</h2>
            <div className="row">
                {
                    pricingData.map(data => <PricingTableCard data={data} ></PricingTableCard>)
                }
            </div>
        </div>
    );
};

export default PricingTable;