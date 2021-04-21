import React from 'react';
import BookingCard from '../BookingCard/BookingCard';

const TakeAppointment = ({date}) => {
    const booking = [
        {
            service: 'Educational Credential Assessment (ECMA)',
            duration: '9.00 AM to 3.00 PM',
            slots: '15 Slots Available',
            application: 'Take Appointment'
        },
        {
            service: 'Immigration',
            duration: '9.00 AM to 3.00 PM',
            slots: '15 Slots Available',
            application: 'Take Appointment'
        },
        {
            service: 'Hotel Booking',
            duration: '9.00 AM to 11.00 PM',
            slots: 'Depends on Availability',
            application: 'Book Hotel'
        },
        {
            service: 'Air Ticketing',
            duration: '9.00 AM to 11.00 PM',
            slots: 'Depends on Availability',
            application: 'Buy Ticket'
        }
    ]
    return (
        <section className="container">
            <h2>Book your service and fix appointment on {date.toDateString()}</h2>
            <div className="row">
            {
                booking.map(booking => <BookingCard booking={booking} date={date} key={booking.service}/>)
            }
            </div>
        </section>
    );
};

export default TakeAppointment;