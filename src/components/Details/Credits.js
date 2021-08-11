import React, { Fragment } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FormatString } from '../../helpers/GetParams';
import { useAxios } from '../../hooks/useAxios';


export const Credits = ({ numShow = 5 }) => {
    const location = useLocation();
    const { getParams } = FormatString(location.pathname);

    const { response } = useAxios({data: {
            methodname: 'get',
            type: getParams[0],
            genre: getParams[1],
            extraArg: 'credits',
            typeRequest: null
        }
    });

    return (
        <Fragment>
            {!!response && numShow === 5 &&
            <div className='gl-containerMedia'>
                <Link to={`/credits/${getParams[1]}`}>
                    <p className='gl-letterStyle'>Créditos:</p>
                </Link>
            </div>}
            {response !== null && 
                <div className='cc-containerMain'>
                    {response.cast.slice(0, numShow).map((c) => (
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