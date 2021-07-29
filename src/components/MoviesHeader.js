import React from 'react';
import { ContainerMain } from '../helpers/ContainerMain';
import { useAxios } from '../hooks/useAxios';

export const MoviesHeader = () => {
    const { resp, error, isLoading } = useAxios({
        methodname: 'get',
        type: 'movie',
        genre: 'popular'
    });

    console.log(resp)
    return (
        <div>
            {error && <h1>Error 404</h1>}
            {isLoading === true && <h1>Loading</h1>}
            {resp !== null && isLoading === false && resp.results.slice(0, 8).map((movie) => (
                <div key={movie.id} className='ContainerMainMovie'>
                        <div className='containerMovie'>
                            <img 
                                src={`https://www.themoviedb.org/t/p/w220_and_h330_face/${movie.poster_path}`}
                                alt={movie.title}
                                className='movie__poster'
                            />
                        </div>
                </div>
            ))}
        </div>
    );
};
