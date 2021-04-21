import React, { useState } from 'react';
import BookingForm from '../BookingForm/BookingForm';

const BookingCard = (props, date) => {
    const { service, duration, slots, application } = props.booking;
    const [modalIsOpen, setIsOpen] = useState(false);
    function openModal() {
        setIsOpen(true);
    }

    function afterOpenModal() {
        // references are now sync'd and can be accessed.
        // subtitle.style.color = '#f00';
    }

    function closeModal() {
        setIsOpen(false);
    }
    return (
        <div className="col-md-3">
            <div className="card h-100" style={{ backgroundColor: 'chocolate' }}>
                <div className="card-body">
                    <h3 className="card-title">{service}</h3>
                    <h5 className="card-title">{duration}</h5>
                    <h6 className="card-text">{slots}</h6>
                </div>
                <button onClick={openModal} className="btn btn-danger">{application}</button>
                <BookingForm modalIsOpen={modalIsOpen} appointmentOn={service} closeModal={closeModal} date={date} />
            </div>
        </div>
    );
};

export default BookingCard;