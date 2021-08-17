import React, { Fragment, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { httpRequest } from '../../helpers/httpRequest';
import { APIUrl, LowQualityImagen, MyApiKey } from '../../helpers/Utils';

export const BestRated = () => {
    const [response, setResponse] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {

        const fetchData = async () => {
            let requestUrl =`${APIUrl}movie/top_rated?api_key=${MyApiKey}&language=es-ES`;

            setLoading(true);

            const [resp] = await Promise.all([
                httpRequest().get(requestUrl),
            ]);

            setResponse(resp);
            setLoading(false);
        };

        fetchData();
    }, [])

    return (
        <Fragment>
            <div className='sd_containerMain'>
                <p>Peliculas mejor valoradas:</p>
                {response !== null && 
                    loading === false && 
                        response.results.slice(0, 5).map((movie) => (
                    <Link key={movie.id} to={`/movie/${movie.id}`}>
                        <div 
                            className='sd_containerInd'>
                            <img 
                                src={`${LowQualityImagen}${movie.poster_path}`}
                                alt={movie.title}
                                className='sd_poster' 
                            />
                            <p className='sd_description'>{movie.title}</p>
                        </div>
                    </Link>
                ))}
                <br></br>
                <hr></hr>
            </div>
        </Fragment>
    );
};
