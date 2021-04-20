import React from 'react';
import './SuccessCard.css';

const SuccessCard = (props) => {
    const {amount, region} = props.info;
    return (
        <div className="col-md-3 p-5">
            <div className="info__card">
            <h5 className="amount text-white">{amount}</h5>
            <h5 className="region">{region}</h5>
            </div>
        </div>
    );
};

export default SuccessCard;