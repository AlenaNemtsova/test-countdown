import React, { useState, useEffect } from 'react';
import useDeviceType from '../../hooks/useDeviceType';
import daysIcon from '../../assets/images/days.svg'
import hoursIcon from '../../assets/images/hours.svg';
import minutesIcon from '../../assets/images/minutes.svg';
import secondsIcon from '../../assets/images/seconds.svg';
import daysIconSmall from '../../assets/images/days-small.svg'
import hoursIconSmall from '../../assets/images/hours-small.svg';
import minutesIconSmall from '../../assets/images/minutes-small.svg';
import secondsIconSmall from '../../assets/images/seconds-small.svg';

import './Timer.css';

const Timer = () => {
    const deviceType = useDeviceType();
    const isTablet = deviceType === 'tablet';
    const isMobile = deviceType === 'mobile';

    const deadline = new Date(2024, 6, 24, 0, 0, 0, 0);
    const [[diffDays, diffHours, diffMonths, diffSeconds], setDiff] = useState([0, 0, 0, 0]);
    const [tick, setTick] = useState(false);
    const [isTimeup, setIsTimeup] = useState(false);
    const [timerId, setTimerID] = useState(0);

    useEffect(() => {
        const diff = (deadline - Date.now()) / 1000;
        if (diff < 0) {
            setIsTimeup(true);
            return;
        }

        setDiff([
            Math.floor(diff / 86400),
            Math.floor((diff / 3600) % 24),
            Math.floor((diff / 60) % 60),
            Math.floor(diff % 60)
        ])
    }, [tick])

    useEffect(() => {
        if (isTimeup) clearInterval(timerId);
    }, [isTimeup, timerId]);

    useEffect(() => {
        const timerID = setInterval(() => setTick(!tick), 1000);
        setTimerID(timerID);
        return () => clearInterval(timerID);
    }, [tick])

    return (
        <>
            <div className='timer'>
                <div className='timer__item'>
                    <p className='timer__item-text'>{diffDays}</p>
                    <img className='timer__item-img' src={isTablet || isMobile ? daysIconSmall : daysIcon} />
                </div>
                <span className='timer__item-symbol'>:</span>
                <div className='timer__item'>
                    <p className='timer__item-text'>{diffHours.toString().padStart(2, '0')}</p>
                    <img className='timer__item-img' src={isTablet || isMobile ? hoursIconSmall : hoursIcon} />
                </div>
                <span className='timer__item-symbol'>:</span>
                <div className='timer__item'>
                    <p className='timer__item-text'>{diffMonths.toString().padStart(2, '0')}</p>
                    <img className='timer__item-img' src={isTablet || isMobile ? minutesIconSmall : minutesIcon} />
                </div>
                <span className='timer__item-symbol'>:</span>
                <div className='timer__item'>
                    <p className='timer__item-text'>{diffSeconds.toString().padStart(2, '0')}</p>
                    <img className='timer__item-img' src={isTablet || isMobile ? secondsIconSmall : secondsIcon} />
                </div>
            </div>
        </>
    )
}

export default Timer;
