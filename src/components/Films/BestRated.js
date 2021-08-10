import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { useFetch } from '../../hooks/useFetch';

export const BestRated = () => {
    const resp = useFetch({
        data: 
        {
            methodname: 'get',
            type: 'movie',
            genre: 'top_rated',
            extraArg: null
        }
    });

    return (
        <Fragment>
            <div className='sd-containerMain'>
                <p>Peliculas mejor valoradas:</p>
                {resp.data !== null && 
                    resp.loading === false && 
                        resp.data.results.slice(0, 5).map((movie) => (
                    <Link to={`/movie/${movie.id}`}>
                        <div 
                            className='sd-containerInd'
                            key={movie.id}>
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
