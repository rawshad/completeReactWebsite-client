import React from 'react';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">FLY WITH SAKIK</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item me-5">
                            <a className="nav-link active" aria-current="page" href="/home">Home</a>
                        </li>
                        <li className="nav-item me-5">
                            <a className="nav-link" href="/services">Services</a>
                        </li>
                        <li className="nav-item me-5">
                            <a className="nav-link" href="/projects">Projects</a>
                        </li>
                        <li className="nav-item me-5">
                            <a className="nav-link" href="testimonial">Testimonial</a>
                        </li>
                        <li className="nav-item me-5">
                            <a className="nav-link" href="contact us">Contact Us</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;