import React, { Fragment, useEffect } from 'react';
import { Link } from 'react-router-dom';

export const MoviesHeader = ({ arrfilms, isLoading, category }) => {
    useEffect(() => {

    }, [arrfilms, category, isLoading])
    return (
        <Fragment>
            {/* {error && <h1>Error 404</h1>} */}
            {isLoading === true && <h1>Loading</h1>}
            <div className='ContainerMainMovie'>
            {arrfilms !== null && isLoading === false && arrfilms.results.slice(0, 20).map((movie) => (
                <Link to={`/view/details/${movie.id}`}><div className='containerMovie' 
                    key={movie.id}>
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
                </div></Link>
            ))}
            </div>
        </Fragment>
    );
};
