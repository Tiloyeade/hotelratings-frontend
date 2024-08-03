import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const RatingForm = () => {
    const [reservation, setReservation] = useState(0);
    const [facilities, setFacilities] = useState(0);
    const [customerService, setCustomerService] = useState(0);
    const [remarks, setRemarks] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            await axios.post('https://hotelratings-backend-dezn.vercel.app/api/ratings', {
                reservation,
                facilities,
                customerService,
                remarks,
            });
            navigate('/thank-you');
        } catch (error) {
            console.error('Error submitting rating:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Reservation: </label>
                <input type="number" value={reservation} onChange={(e) => setReservation(e.target.value)} min="1" max="10" />
            </div>
            <div>
                <label>Facilities: </label>
                <input type="number" value={facilities} onChange={(e) => setFacilities(e.target.value)} min="1" max="10" />
            </div>
            <div>
                <label>Customer Service: </label>
                <input type="number" value={customerService} onChange={(e) => setCustomerService(e.target.value)} min="1" max="10" />
            </div>
            <div>
                <label>Remarks: </label>
                <textarea value={remarks} onChange={(e) => setRemarks(e.target.value)} />
            </div>
            <button type="submit">Submit Rating</button>
        </form>
    );
};

export default RatingForm;
