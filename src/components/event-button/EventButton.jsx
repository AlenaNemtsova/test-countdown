import React from 'react';
import arrow from '../../assets/images/arrow.svg';

import './EventButton.css';

const EventButton = () => {
    return (
        <div className='button-wrapper'>
            <div className='button-container'>
                <a className='event-button' href=''>Go to the event</a>
                <img src={arrow} />
            </div>
        </div>
    )
}

export default EventButton;