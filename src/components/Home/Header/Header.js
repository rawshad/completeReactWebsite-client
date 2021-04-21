import React from 'react';
import Hero from '../Hero/Hero';
import Navbar from '../../Shared/Navbar/Navbar';
import Success from '../Success/Success';

const Header = () => {
    return (
        <div>
            <Navbar />
            <Hero />
            <Success />
        </div>
    );
};

export default Header;