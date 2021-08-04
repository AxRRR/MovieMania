import React, { Fragment } from 'react';
import { useParams } from 'react-router-dom';
import { useAxios } from '../hooks/useAxios';

export const CreditsContainer = () => {
    const { RouteIdFilm } = useParams(); 

    const { resp, error, isLoading } = useAxios({
        methodname: 'get',
        type: 'movie',
        genre: RouteIdFilm,
        extraArg: 'credits'
    });

    console.log(resp)

    return (
        <Fragment>
            {resp !== null && 
                <div className='cc-containerMain'>
                    {/* <p>Titulo Original: {resp.original_title}</p>
                    <p>Estado: {resp.status}</p> */}
                    {resp.cast.slice(0, 5).map((c) => (
                        <div 
                            key={c.cast_id}
                            className='cc-containerCharacter'
                        >
                            <img 
                                src={`https://www.themoviedb.org/t/p/w220_and_h330_face/${c.profile_path}`}
                                alt={c.character}
                            />
                            <p>{c.character}</p>
                            <p>{c.name}</p>
                        </div>
                    ))}
                </div>
                }
        </Fragment>
    );
};