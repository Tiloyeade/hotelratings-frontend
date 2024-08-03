import React, { useState, useEffect } from 'react';
import axios from 'axios';

const RatingList = () => {
    const [ratings, setRatings] = useState([]);

    useEffect(() => {
        const fetchRatings = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/ratings');
                setRatings(response.data);
            } catch (error) {
                console.error('Error fetching ratings:', error);
            }
        };
        fetchRatings();
    }, []);

    return (
        <div>
            <h2>Ratings</h2>
            <ul>
                {ratings.map((rating, index) => (
                    <li key={index}>
                        Reservation: {rating.reservation}, Facilities: {rating.facilities}, Customer Service: {rating.customerService}, Remarks: {rating.remarks}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default RatingList;