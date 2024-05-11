import React from 'react';
import { NavLink } from 'react-router-dom';
import useDeviceType from '../../hooks/useDeviceType';
import logo from '../../assets/images/logo.svg';
import logoSmall from '../../assets/images/logo-small.svg';

import './Logo.css';

const Logo = () => {
    const deviceType = useDeviceType();
    const isMobile = deviceType === 'mobile';

    return (
        <div className='logo'>
            <NavLink to='/'>
                <img src={isMobile ? logoSmall : logo} />
            </NavLink>
        </div>
    )
}

export default Logo;
