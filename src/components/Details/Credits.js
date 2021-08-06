import React, { Fragment } from 'react';
import { useAxios } from '../../hooks/useAxios';


export const Credits = ({ filmIdentificier, typeFilm }) => {

    const { resp } = useAxios({
        methodname: 'get',
        type: typeFilm,
        genre: filmIdentificier,
        extraArg: 'credits'
    });

    return (
        <Fragment>
            <div>
                <p>Reparto:</p>
            </div>
            {resp !== null && 
                <div className='cc-containerMain'>
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