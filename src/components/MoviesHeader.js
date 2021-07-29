import React, { Fragment } from 'react';
import { ContainerMain } from '../helpers/ContainerMain';
import { useAxios } from '../hooks/useAxios';

export const MoviesHeader = ({ category }) => {
    const { resp, error, isLoading } = useAxios({
        methodname: 'get',
        type: category,
        genre: 'popular'
    });

    console.log(resp)
    return (
        <ContainerMain>
            {/* {error && <h1>Error 404</h1>} */}
            {isLoading === true && <h1>Loading</h1>}
            {resp !== null && isLoading === false && resp.results.slice(0, 8).map((movie) => (
                <div className='ContainerMainMovie' key={movie.id}>
                        <div className='containerMovie'>
                            <img 
                                src={`https://www.themoviedb.org/t/p/w220_and_h330_face/${movie.poster_path}`}
                                alt={movie.title}
                                className='movie poster'
                            />
                            {
                                category === 'tv' ? 
                                <div>
                                    <p className='movie desp'>{movie.name}</p>
                                    <p className='movie desp'>{movie.first_air_date}</p>
                                </div>
                                :
                                <div>
                                    <p className='movie desp'>{movie.title}</p>
                                    <p className='movie desp'>{movie.release_date}</p>
                                </div> 
                                }
                            {/* <p className='movie avegare'>{movie.vote_average * 10}% average</p> */}
                        </div>
                </div>
            ))}
        </ContainerMain>
    );
};
