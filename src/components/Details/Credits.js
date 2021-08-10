import React, { Fragment, useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FormatString } from '../../helpers/GetParams';
import { useAxios } from '../../hooks/useAxios';
// import { useFetch } from '../../hooks/useFetch';


export const Credits = ({ numShow = 5 }) => {
    const [getUrlParams, setGetUrlParams] = useState('')

    const location = useLocation();

    useEffect(() => {
        setGetUrlParams(FormatString(location.pathname));
    }, [location.pathname])

    // const resp = useFetch({
    //     data: {
    //         methodname: 'get',
    //         type: getUrlParams[0],
    //         genre: getUrlParams[1],
    //         extraArg: 'credits'
    //     }
    // });

    const { resp } = useAxios({
        methodname: 'get',
        type: getUrlParams[0],
        genre: getUrlParams[1],
        extraArg: 'credits'
    });

    return (
        <Fragment>
            {!!resp && numShow === 5 &&
            <div className='gl-containerMedia'>
                <Link to={`/credits/${getUrlParams[1]}`}>
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