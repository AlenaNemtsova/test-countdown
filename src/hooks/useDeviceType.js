import { useState, useEffect } from 'react';

function getDeviceType(deviceType) {
    const { innerWidth: width } = window;
    if (width < 361) {
        return deviceType = 'mobile';
    } else if (width < 769) {
        return deviceType = 'tablet';
    } else if (width < 1441) {
        return deviceType = 'desktop';
    }
    else {
        return deviceType = 'wideScreen';
    }
}

export default function useDeviceType() {
    const [deviceType, setDeviceType] = useState(getDeviceType());

    useEffect(() => {
        function handleResize() {
            setDeviceType(getDeviceType());
        }

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return deviceType;
}