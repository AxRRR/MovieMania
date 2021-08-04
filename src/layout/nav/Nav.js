import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/images/maniamovie.png';

export const Nav = () => {
    return (
        <Fragment>
            <nav>
                <ul className='navbar stylelist'>
                    <li>
                        <Link to='/films'><img 
                            src={Logo} 
                            alt={'LogoMM'}
                            className='navbar img'
                        /></Link>
                    </li>
                    <li><p className='navbar items'>Home</p></li>
                    <li><p className='navbar items'>Account</p></li>
                </ul>
            </nav>
        </Fragment>
    );
};
