import React, { Fragment, useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ContainerMain } from '../../helpers/ContainerMain';
import { FormatParam } from '../../helpers/FormatParamsUrl';
import { FormatString } from '../../helpers/GetParams';
import { httpRequest } from '../../helpers/httpRequest';
import { APIUrl, MyApiKey } from '../../helpers/Utils';

export const Credits = ({ numShow = 5 }) => {
    const [response, setResponse] = useState(null);
    const [loading, setLoading] = useState(false);
    const [creditsParams, setCreditsParams] = useState(null);

    const location = useLocation();
    
    useEffect(() => {
        let { getParams } = FormatString(location.pathname);
    
        if (getParams.length === 2){
            setCreditsParams([getParams[0], getParams[1]])
        }
        else{
            setCreditsParams([getParams[0], getParams[1], getParams[2]])
        }
        
        const fetchData = async () => {
            let requestUrl =`${APIUrl}${getParams[0]}/${getParams[1]}/credits?api_key=${MyApiKey}`;

            setLoading(true);

            const [resp] = await Promise.all([
                httpRequest().get(requestUrl),
            ]);

            console.log(resp)
            setResponse(resp);
            setLoading(false);
        };
        
        fetchData();
        
    }, [location])
    
    return (
        <Fragment>
            {loading === true && <p>Cargando...</p>}
            {response !== null && numShow === 5 && creditsParams.length === 2 &&
            <div className='gl_containerMedia'>
                <Link to={`/${creditsParams[0]}/${creditsParams[1]}/credits`}>
                    <p className='gl_letterStyle'>Créditos:</p>
                </Link>
            </div>}
            {response !== null && creditsParams.length === 2 &&
                <div className='cc_containerMain'>
                    {response.cast.slice(0, numShow).map((c) => (
                        <div 
                            key={c.cast_id}
                            className='cc_containerCharacter'
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
            {response !== null && creditsParams.length === 3 && 
                <ContainerMain>
                    <div className='cc_containerMain--complete'>
                        {response.cast.slice(0, response.cast.length-1).map((c) => (
                            <div 
                                key={c.cast_id}
                                className='cc_containerCharacter_complete'
                            >
                                {c.profile_path !== null ?
                                <img 
                                    src={`https://www.themoviedb.org/t/p/w220_and_h330_face/${c.profile_path}`}
                                    alt={c.character}
                                    className='cc_bigPosters--credits'
                                /> :
                                <img 
                                    src={'https://www.diabetes.ie/wp-content/uploads/2017/02/no-image-available-250x417.png'}
                                    alt={c.character}
                                    className='cc_bigPosters--credits'
                                />}
                                <p>{c.character}</p>
                                <Link to={`/actor/${FormatParam(c.name)}/${c.id}`}>
                                    <p>{c.name}</p>
                                </Link>
                            </div>
                        ))}
                    </div>
                </ContainerMain>

            }
        </Fragment>
    );
};
