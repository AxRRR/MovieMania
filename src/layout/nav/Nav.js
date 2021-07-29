import React, { Fragment } from 'react';

export const Nav = () => {
    return (
        <Fragment>
            <nav>
                <ul className='navbar stylelist'>
                    <li className='navbar items'>Home</li>
                    <li className='navbar items'>Search</li>
                </ul>
            </nav>
        </Fragment>
    );
};
