import React from 'react';

const SetService = (props) => {
    const {img, name, description} = props.service;
    return (
            <div className="col-md-3">
                <div className="card h-100">
                    <img src={img} className="card-img-top" alt="..." style={{height:'100%'}}/>
                    <div className="card-body">
                        <h5 className="card-title">{name}</h5>
                        <p className="card-text">{description}</p>
                    </div>
                </div>
            </div>
    );
};

export default SetService;