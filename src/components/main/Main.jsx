import React from 'react';
import useDeviceType from '../../hooks/useDeviceType';
import Timer from '../timer/Timer';
import EventButton from '../event-button/EventButton';
import blobLeftLarge from '../../assets/images/blob-left-large.svg';
import blobRightLarge from '../../assets/images/blob-right-large.svg';
import blobLeft from '../../assets/images/blob-left.svg';
import blobRight from '../../assets/images/blob-right.svg';
import blobLeftSmall from '../../assets/images/blob-left-small.svg';
import blobRightSmall from '../../assets/images/blob-right-small.svg';

import './Main.css';

const Main = () => {
    const deviceType = useDeviceType();
    const isDesktop = deviceType === 'desktop';
    const isTablet = deviceType === 'tablet';
    const isMobile = deviceType === 'mobile';

    return (
        <main className='main'>
            <img className='blob-left' src={isDesktop ? blobLeft : isTablet || isMobile ? blobLeftSmall : blobLeftLarge} />
            <img className='blob-right' src={isDesktop ? blobRight : isTablet || isMobile ? blobRightSmall : blobRightLarge} />
            <section className='under-construction'>
                <h1 className='under-construction__title'>UNDER CONSTRUCTION</h1>
                <p className='text under-construction__text'>We're making lots of improvements and will be back soon</p>
                <Timer />
                <p className='text under-construction__event-text'>Check our event page when you wait:</p>
                <EventButton />
            </section>
        </main>
    )
}

export default Main;
