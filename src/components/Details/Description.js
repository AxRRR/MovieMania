import React, { Fragment } from 'react';

export const Description = ({ arrFilm }) => {
    return (
        <Fragment>
            <div className='fd_containerMain'>
                {arrFilm !== null && 
                <div className='fd_containerFilm'>
                    <p>Titulo Original: {arrFilm.original_title}</p>
                    <p>Estado: {arrFilm.status}</p>
                    <div className='fd_containerOrigin'>
                    {arrFilm.production_countries.map((p) => (
                        <p key={p.name} className='fd_letterDesp'>Páis de Origen: {p.name}</p>
                    ))}
                    {arrFilm.production_companies.map((p) => (
                        <p key={p.name} className='fd_letterDesp'>Productora/s: {p.name}</p>
                    ))}
                    </div>
                </div>
                }
            </div>
        </Fragment>
    );
};
