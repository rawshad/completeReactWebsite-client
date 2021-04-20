import React from 'react';
import test1 from '../../../images/test-1.jpg';
import test2 from '../../../images/test-2.jpg';
import test3 from '../../../images/test-3.jpg';
import TestimonialCard from '../TestimonialCard/TestimonialCard';

const Testimonial = () => {
    const review = [
        {
            img: test1,
            name: 'Kabir',
            country: 'Australia',
            opinion: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias, nihil!'
        },
        {
            img: test2,
            name: 'Maria',
            country: 'Canada',
            opinion: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias, nihil!'
        },
        {
            img: test3,
            name: 'Maruf',
            country: 'Italy',
            opinion: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias, nihil!'
        }
    ]
    return (
        <section className="container">
            <h3 className="text-center mt-5">Testimonials</h3>
            <h1 className="text-center">“Customer satisfaction is our success”</h1>
            <div className="row mt-5">
                {
                    review.map(review => <TestimonialCard review = {review} key = {review.country} />)
                }
            </div>
        </section>
    );
};

export default Testimonial;