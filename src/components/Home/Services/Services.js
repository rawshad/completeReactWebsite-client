import React from 'react';
import ecma from '../../../images/s-1.jpg';
import Immigration from '../../../images/immigration.png';
import hotel from '../../../images/hotel-booking.jpg';
import ticket from '../../../images/ticket.jpg';
import SetService from '../SetService/SetService';
const Services = () => {
    const service = [
        {
            img: ecma,
            name: 'ECMA',
            description: 'Educational Credential Assessment',
            application: 'Take Appointment'
        },
        {
            img: Immigration,
            name: 'Immigration',
            description: 'Immigration To Canada & Australia',
            application: 'Take Appointment'
        },
        {
            img: hotel,
            name: 'Hotel Booking',
            description: 'Domestic & International Hotel Booking',
            application: 'Book Hotel'
        },
        {
            img: ticket,
            name: 'Air Ticketing',
            description: 'Domestic & International Air Ticketing',
            application: 'Buy Ticket'
        }
    ]
    return (
        <section className="container">
            <h3 className="text-center">Our Services</h3>
            <h1 className="text-center mb-5">“Trust us, We help you”</h1>
            <div className="row">
                {
                    service.map(service => <SetService service = {service} key = {service.name} />)
                }
            </div>
        </section>
    );
};

export default Services;