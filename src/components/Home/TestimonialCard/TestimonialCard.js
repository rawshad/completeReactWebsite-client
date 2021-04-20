import React from 'react';
import './TestimonialCard.css';

const TestimonialCard = (props) => {
    const { img, name, country, opinion } = props.review;
    return (
        <div className="col-md-4">
            <div className="card">
                <img className="card-img-top test__card__img" src={img} alt="" />
                <div className="card-body">
                    <h3 className="card-title">{name}</h3>
                    <h4 className="card-title">{country}</h4>
                    <p className="card-text">{opinion}</p>
                </div>
            </div>

        </div>
    );
};

export default TestimonialCard;