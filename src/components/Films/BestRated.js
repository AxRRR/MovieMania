import React, { Fragment, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { httpRequest } from '../../helpers/httpRequest';
import { APIUrl, MyApiKey } from '../../helpers/Utils';

export const BestRated = () => {
    const [response, setResponse] = useState(null);
    const [loading, setLoading] = useState(false);

    // const { response, isLoading } = useAxios({data: {
    //         methodname: 'get',
    //         type: 'movie',
    //         genre: 'top_rated',
    //         extraArg: null
    //     }
    // });


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
            <div className='sd-containerMain'>
                <p>Peliculas mejor valoradas:</p>
                {response !== null && 
                    loading === false && 
                        response.results.slice(0, 5).map((movie) => (
                    <Link key={movie.id} to={`/movie/${movie.id}`}>
                        <div 
                            className='sd-containerInd'>
                            <img 
                                src={`https://www.themoviedb.org/t/p/w220_and_h330_face/${movie.poster_path}`}
                                alt={movie.title}
                                className='sd-poster' 
                            />
                            <p className='desp'>{movie.title}</p>
                        </div>
                    </Link>
                ))}
                <br></br>
                <hr></hr>
            </div>
        </Fragment>
    );
};
