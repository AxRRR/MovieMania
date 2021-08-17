import React, { Fragment } from 'react';
import { ContainerMainNoFlex } from '../helpers/ContainerMain';

export const Footer = () => {
    return (
        <Fragment>
                <ContainerMainNoFlex>
                    <div className='footer_containerMain'>
                        <section className='footer_section'>
                            <h3 className='footer_title'>API</h3>
                            <a className='footer_link' 
                                href='https://www.themoviedb.org'>The Movie DB</a>
                        </section>
                        <section className='footer_section'>
                            <h3 className='footer_title'>Créditos</h3>
                            <span className='footer_link'>Sitio web diseñado por AxR.</span>
                        </section>
                        <section className='footer_section'>
                            <h3 className='footer_title'>Contacto</h3>
                            <a  className='footer_link'
                                href='https://github.com/AxRRR'>AxR GitHub</a>
                        </section>
                    </div>
                </ContainerMainNoFlex>
        </Fragment>
    );
};
