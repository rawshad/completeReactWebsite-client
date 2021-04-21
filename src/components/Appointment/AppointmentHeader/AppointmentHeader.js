import React from 'react';
import { Link } from 'react-router-dom';
import appointmentHero from '../../../images/appoint-hero.jpg'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const AppointmentHeader = ({handleDateChange}) => {
    
    return (
        <section className="container">
            <div className="row m-5 align-items-center">
                <div className="col-md-4 mb-5">
                    <div className="card">
                            <div className="card-body">
                                <h1 className="card-title">Appointment</h1>
                                <Calendar
                                onChange={handleDateChange}
                                value={new Date()}
                                />
                            </div>
                    </div>
                </div>
                <div className="col-md-8">
                    <img className="img-fluid img-thumbnail" src={appointmentHero} alt=""/>
                </div>
            </div>
        </section>
    );
};

export default AppointmentHeader;