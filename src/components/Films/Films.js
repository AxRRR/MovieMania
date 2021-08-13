import React, { Fragment, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { LowQualityImagen } from '../../helpers/Utils';

export const Films = ({ arrfilms, isLoading, category }) => {
    useEffect(() => { }, [arrfilms, isLoading, category])
    return (
        <Fragment>
            {/* {error && <h1>Error 404</h1>} */}
            {isLoading === true && <h1>Loading</h1>}
            <div className='fm'>
            {arrfilms !== null && 
                isLoading === false && 
                    arrfilms.results.slice(0, 40).map((movie) => (
                <div className='fm_containerMain' 
                    key={movie.id}>
                    <img 
                        src={`${LowQualityImagen}${movie.poster_path}`}
                        alt={movie.title}
                        className='fm_poster'
                    />
                    {
                        category === 'tv' ? 
                        <div>
                            <Link to={`/tv/${movie.id}`}>
                                <p className='fm_description'>{movie.name}</p>
                                <p className='fm_description'>{movie.first_air_date}</p>
                            </Link>
                        </div>
                        :
                        <div>
                            <Link to={`/movie/${movie.id}`}>
                                <p className='fm_description'>{movie.title}</p>
                                <p className='fm_description'>{movie.release_date}</p>
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
