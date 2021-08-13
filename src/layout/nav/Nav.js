import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/images/maniamovie.png';

export const Nav = () => {
    return (
        <Fragment>
            <nav>
                <ul className='navbar navbar_stylelist'>
                    <li>
                        <Link to='/films'><img 
                            src={Logo} 
                            alt={'LogoMM'}
                            className='navbar_img'
                        /></Link>
                    </li>
                    <li><p className='navbar_items'>Home</p></li>
                    <li><p className='navbar_items'>Account</p></li>
                </ul>
            </nav>
        </Fragment>
    );
};
