import React from 'react';
import SuccessCard from '../SuccessCard/SuccessCard';

const Success = () => {
    const info = [
        {
            amount: 800,
            region: 'Dhaka'
        },
        {
            amount: 600,
            region: 'Chittagong'
        },
        {
            amount: 1000,
            region: 'Sylhet'
        },
        {
            amount: 5000,
            region: 'Rest of Bangladesh'
        }
    ]
    return (
        <section className="container">
            <h1 className="text-center mt-5">Successfully processed Applications</h1>
            <div className="row">
                {info.map(info => <SuccessCard info={info} key={info.region}/>)}
            </div>
        </section>
    );
};

export default Success;