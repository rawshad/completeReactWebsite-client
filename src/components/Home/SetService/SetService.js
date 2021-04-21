import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

const SetService = (props) => {
    const {img, name, description, application} = props.service;
    const history = useHistory()
    // const handleBook = () => {
    //     history.push('/appointment');
    // }
    // const [modalIsOpen, setIsOpen] = useState(false);
    // function openModal() {
    //     setIsOpen(true);
    // }

    // function afterOpenModal() {

    // }

    // function closeModal() {
    //     setIsOpen(false);
    // }
    return (
            <div className="col-md-3">
                <div className="card h-100">
                    <img src={img} className="card-img-top" alt="..." style={{height:'100%'}}/>
                    <div className="card-body">
                        <h5 className="card-title">{name}</h5>
                        <p className="card-text">{description}</p>
                    </div>
                </div>
                <Link to="/appointment"><button className="btn btn-secondary" style={{width: '100%'}}>{application}</button></Link>
                {/* <BookingForm modalIsOpen={modalIsOpen} appointmentOn={name} closeModal={closeModal} /> */}
            </div>
    );
};

export default SetService;