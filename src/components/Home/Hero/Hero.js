import React from 'react';
import heroImage from '../../../images/hero-image.jpg';
import '../Hero/Hero.css';

const Hero = () => {
    return (
        <main className="container">
            <div className="row m-5 align-items-center">
            <div className="col-md-4 mb-5">
                <div className="card">
                        <div className="card-body">
                            <h1 className="card-title">We deliver<br/> what we promised.</h1>
                            <p className="card-text">We have remarkable immigration success in Express Entry and PNP program.</p>
                            <a href="/" className="btn btn-primary">Get Appointment</a>
                        </div>
                </div>
            </div>
            <div className="col-md-8">
                <img className="img-fluid img-thumbnail" src={heroImage} alt=""/>
            </div>
            </div>
        </main>
    );
};

export default Hero;