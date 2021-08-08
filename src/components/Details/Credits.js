import React, { Fragment } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAxios } from '../../hooks/useAxios';

import { ParseParams } from '../../hooks/useParseParams';


export const Credits = ({ filmIdentificier, typeFilm, numShow = 5 }) => {

    // const { RouteIdCredits, RouteIdFilm, RouteTypeFilm } = useParams();

    const location = useLocation();

    let arrResponse = '';
    const { variableee } = ParseParams({
        currentLocation: location
    })

    // const { variableee } = useParseParams({
    //     currentLocation: location
    // });

    const { resp } = useAxios({
        methodname: 'get',
        type: variableee[0],
        genre: variableee[1],
        extraArg: 'credits'
    });
    // console.log(RouteIdCredits)
    // console.log(RouteIdFilm)
    // console.log(RouteTypeFilm)
    // console.log(location)
    console.log('el parseresponse')
    console.log(variableee)

    return (
        <Fragment>
            {!!resp && numShow === 5 &&
            <div className='gl-containerMedia'>
                <Link to={`/credits/${variableee[1]}`}>
                    <p className='gl-letterStyle'>Créditos:</p>
                </Link>
            </div>}
            {resp !== null && 
                <div className='cc-containerMain'>
                    {resp.cast.slice(0, numShow).map((c) => (
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