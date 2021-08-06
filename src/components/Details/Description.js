import React, { Fragment } from 'react';

export const Description = ({ arrFilm }) => {
    return (
        <Fragment>
            <div className='fd-containerMain'>
                {arrFilm !== null && 
                <div>
                    <p>Titulo Original: {arrFilm.original_title}</p>
                    <p>Estado: {arrFilm.status}</p>
                    {arrFilm.production_countries.map((p) => (
                        <p>Páis de Origen: {p.name}</p>
                    ))}
                    {arrFilm.production_companies.map((p) => (
                        <p>Productora/s: {p.name}</p>
                    ))}
                </div>
                }
            </div>
        </Fragment>
    );
};
