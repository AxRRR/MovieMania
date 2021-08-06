import React, { Fragment } from 'react';

export const Description = ({ arrFilm }) => {
    return (
        <Fragment>
            <div className='fd-containerMain'>
                {arrFilm !== null && 
                <div className='fd-containerSec'>
                    <p>Titulo Original: {arrFilm.original_title}</p>
                    <p>Estado: {arrFilm.status}</p>
                    <div className='fd-containerSec2'>
                    {arrFilm.production_countries.map((p) => (
                        <p className='fd-letterDesp'>Páis de Origen: {p.name}</p>
                    ))}
                    {arrFilm.production_companies.map((p) => (
                        <p className='fd-letterDesp'>Productora/s: {p.name}</p>
                    ))}
                    </div>
                </div>
                }
            </div>
        </Fragment>
    );
};
