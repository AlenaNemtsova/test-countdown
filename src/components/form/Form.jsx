import React from 'react';
import { useState } from 'react';

import './Form.css';

const Form = () => {
    const [data, setData] = useState({});
    const [errorMessage, setErrorMessage] = useState('');

    function isValidEmail(email) {
        const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return pattern.test(email);
    }

    function handleSubmit(e) {
        e.preventDefault();
        const email = e.target.email.value;
        const formData = new FormData(e.target);

        if (isValidEmail(email)) {

            fetch('http://api/endpoint', {
                method: 'POST',
                body: formData,
            })
                .then((response) => response.json())
                .then((result) => {
                    setData(result);
                });

            setErrorMessage('');
        } else {
            setErrorMessage('Please enter valid email')
        }
    }

    return (
        <form onSubmit={handleSubmit} noValidate className='form'>
            <p className='error-message'>{errorMessage}</p>
            <div className='input-container'>
                <input className='input' type='email' name='email' placeholder='Enter your Email and get notified' />
            </div>
        </form>
    )
}

export default Form;
