// frontend/src/components/TestComponent.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const TestComponent = () => {
    const [message, setMessage] = useState('');

    useEffect(() => {
        const fetchMessage = async () => {
            try {
                const response = await axios.get('/api/test'); // Adjust based on your backend route
                setMessage(response.data.message);
            } catch (error) {
                console.error('Error fetching the message:', error);
            }
        };

        fetchMessage();
    }, []);

    return (
        <div>
            <h1>{message}</h1>
        </div>
    );
};

export default TestComponent;
