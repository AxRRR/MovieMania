import React, { Fragment } from 'react';
import { useParams } from 'react-router-dom';
import { useAxios } from '../hooks/useAxios';
import { GaleryDetails } from './GaleryDetails';

export const ShowDetails = () => {
    const { RouteIdFilm } = useParams();

    const { resp, error, isLoading } = useAxios({
        methodname: 'get',
        type: 'movie',
        genre: RouteIdFilm,
        extraArg: null
    });

    console.log(resp)
    console.log(error)

    return (
        <Fragment>
            {/* {error && <p>La página a la que intentas acceder no existe. Error 404</p>} */}
            {isLoading === true && <h1>Loading</h1>}
                {resp !== null && 
                    <div className='dt-containerMain'>
                        <div className='dt-containerImage'>
                        <img 
                            src={`https://www.themoviedb.org/t/p/w220_and_h330_face/${resp.poster_path}`}
                            alt={resp.title}
                            className='Bigposter'
                        />
                    </div>
                    <div className='dt-containerDetails'>
                        <p className='dt-title'>{resp.title}</p>
                        <p className=''>{resp.release_date}  valoración: {resp.vote_average}</p>
                        <div className='dt-genres'>
                            {resp.genres.map((g) => (
                                <p className='dt-genresStyle'>{g.name}</p>
                            ))}
                        </div>
                        <p className=''>{resp.overview}</p>
                    </div>
                </div>}
            <GaleryDetails filmIdentifier={RouteIdFilm} />
        </Fragment>
    );
};
