import React, { Fragment } from 'react';
import { useAxios } from '../hooks/useAxios';

export const BestRatedSide = () => {
    const { resp, error, isLoading } = useAxios({
        methodname: 'get',
        type: 'movie',
        genre: 'top_rated',
        extraArg: null
    });

    return (
        <Fragment>
            <div className='sd-containerMain'>
                <p>Peliculas mejor valoradas:</p>
                {resp !== null && isLoading === false && resp.results.slice(0, 5).map((movie) => (
                    <div className='sd-containerInd'>
                        <img 
                            src={`https://www.themoviedb.org/t/p/w220_and_h330_face/${movie.poster_path}`}
                            alt={movie.title}
                            className='sd-poster' 
                        />
                        <p className='desp'>{movie.title}</p>
                    </div>
                ))}
                <br></br>
                <hr></hr>
            </div>
        </Fragment>
    );
};
