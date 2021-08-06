import React, { Fragment, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export const Films = ({ arrfilms, isLoading, category }) => {
    // const [NumShowFilms, setNumShowFilms] = useState(40);

    useEffect(() => {}, [arrfilms, category, isLoading]);

    // console.log(arrfilms)
    return (
        <Fragment>
            {/* {error && <h1>Error 404</h1>} */}
            {isLoading === true && <h1>Loading</h1>}
            <div className='ContainerMainMovie'>
            {arrfilms !== null && 
                isLoading === false && 
                    arrfilms.results.slice(0, 40).map((movie) => (
                <div className='containerMovie' 
                    key={movie.id}>
                    <img 
                        src={`https://www.themoviedb.org/t/p/w220_and_h330_face/${movie.poster_path}`}
                        alt={movie.title}
                        className='movie poster'
                    />
                    {
                        category === 'tv' ? 
                        <div>
                            <Link to={`/tv/${movie.id}`}>
                                <p className='movie desp'>{movie.name}</p>
                                <p className='movie desp'>{movie.first_air_date}</p>
                            </Link>
                        </div>
                        :
                        <div>
                            <Link to={`/movie/${movie.id}`}>
                                <p className='movie desp'>{movie.title}</p>
                                <p className='movie desp'>{movie.release_date}</p>
                            </Link>
                        </div> 
                        }
                    {/* <p className='movie avegare'>{movie.vote_average * 10}% average</p> */}
                </div>
            ))}
            </div>
        </Fragment>
    );
};
