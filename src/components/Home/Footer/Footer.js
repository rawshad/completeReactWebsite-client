import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
    return (
        <footer className="container-fluid bg-dark mt-5 text-white p-4">
            <div className="row">
                <div className="col-md-8">
                    <h6 className="text-center">All Rights Reserved @ Fly With Sakik || Copyright {(new Date()).getFullYear()}</h6>
                </div>
                <div className="col-md-4">
                    <a href="/" className="ms-5 text-white"><FontAwesomeIcon icon={faFacebookF} /></a>
                    <a href="/" className="ms-5 text-white"><FontAwesomeIcon icon={faTwitter} /></a>
                    <a href="/" className="ms-5 text-white"><FontAwesomeIcon icon={faYoutube} /></a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;