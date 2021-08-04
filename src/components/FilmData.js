import React, { Fragment } from 'react';
import { useParams } from 'react-router-dom';
import { useAxios } from '../hooks/useAxios';

export const FilmData = () => {
    const { RouteIdFilm } = useParams(); 

    const { resp, error, isLoading } = useAxios({
        methodname: 'get',
        type: 'movie',
        genre: RouteIdFilm,
        extraArg: null
    });
    return (
        <Fragment>
            <div className='fd-containerMain'>
                {resp !== null && 
                <div>
                    <p>Titulo Original: {resp.original_title}</p>
                    <p>Estado: {resp.status}</p>
                    {resp.production_countries.map((p) => (
                        <p>Páis de Origen: {p.name}</p>
                    ))}
                    {resp.production_companies.map((p) => (
                        <p>Productora/s: {p.name}</p>
                    ))}
                </div>
                }
            </div>
        </Fragment>
    );
};
