import React from 'react';
import Modal from 'react-modal';
import { useForm } from "react-hook-form";
import Appointment from '../Appointment/Appointment';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)'
    }
};

Modal.setAppElement('#root')
const BookingForm = ({ modalIsOpen, closeModal, appointmentOn, date }) => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        data.service = appointmentOn;
        data.date = date;
        data.created = new Date();
        fetch('https://fast-hamlet-92350.herokuapp.com/addAppointment', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(success => {
            if(success){
                closeModal();
            }
        })
    }

    return (
        <div>
            {/* <button onClick={openModal}>Open Modal</button> */}
            <Modal
                isOpen={modalIsOpen}
                // onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >

                <h2 className="text-center">{appointmentOn}</h2>
                <form onSubmit={handleSubmit(onSubmit)} className="row g-0">
                    <input defaultValue="name" {...register("name")}/><br/>
                    <input defaultValue="email" {...register("email", { required: true })} /><br/>
                    {errors.emailRequired && <span>This field is required</span>}
                    <input defaultValue="phone number"{...register("phone", { required: true })} /><br/>
                    {errors.phoneRequired && <span>This field is required</span>}
                    <input defaultValue="gender"{...register("gender", { required: true })} /><br/>
                    {errors.genderRequired && <span>This field is required</span>}
                    <input defaultValue="code"{...register("zip", { required: true })} /><br/>
                    {errors.zipRequiredRequired && <span>This field is required</span>}
                    <input type="submit" />
                </form>
                
            </Modal>
        </div>
    );
};

export default BookingForm;