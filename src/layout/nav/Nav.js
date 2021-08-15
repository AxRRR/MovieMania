import React, { Fragment } from 'react';
import { Link, useHistory } from 'react-router-dom';
import Logo from '../../assets/images/maniamovie.png';
import { useForm } from '../../hooks/useForm';

export const Nav = () => {
    let history = useHistory();

    const handleSearch = ( e ) => {
        e.preventDefault();
        history.push(`/search?q=${findname}`);
    }

    const [form, handlerInputChange] = useForm({
        findname: ''
    })

    const { findname } = form;

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
                    <li>
                        <form onSubmit={handleSearch}>
                            <input
                                name='findname' 
                                className='navbar_input'
                                placeholder='buscar pelicula, serie o actor'
                                onChange={handlerInputChange}
                            />
                        </form>
                    </li>
                    <li className='navbar_itemsStyle'>
                        <p className='navbar_items'>Mi lista</p>
                    </li>
                    <li className='navbar_itemsStyle'>
                        <p className='navbar_items'>Iniciar sesión</p>
                    </li>
                </ul>
            </nav>
        </Fragment>
    );
};
