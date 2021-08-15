import React, { Fragment, useEffect, useState } from 'react';
import queryString from 'query-string';
import { useLocation } from 'react-router-dom';
import { APIUrl, MyApiKey, OriginalQualityImage } from '../../helpers/Utils';
import { httpRequest } from '../../helpers/httpRequest';
import { ContainerMain } from '../../helpers/ContainerMain';

export const Find = () => {
    const [response, setResponse] = useState(null);
    const [loading, setLoading] = useState(false);

    const Location = useLocation();
    const { q = '' } = queryString.parse( Location.search );

    useEffect(() => {
        if( q === ''){
            return
        }
        const fetchData = async () => {
            let requestUrl =`${APIUrl}search/multi?api_key=${MyApiKey}&language=es-ES&query=${q}&page=1&include_adult=false`;

            setLoading(true);

            const [resp] = await Promise.all([
                httpRequest().get(requestUrl),
            ]);

            setResponse(resp);
            setLoading(false);
        };
        
        fetchData();
    }, [q])

    return (
        <Fragment>
            <ContainerMain>
                <div>
                    {loading === true && <p>Cargando...</p>}
                    {!!response && <p>Resultados de búsqueda:  `"{q}"` - resultados: {response.results.length}</p>}
                    {!!response && response.results.slice(0, 10).map((r) => 
                        <div 
                        key={r.id}
                        className='find_containerMain'>
                            <div>
                                <img 
                                    src={`${OriginalQualityImage}${r.poster_path}`}
                                    className='find_poster'
                                    alt={r.id}
                                />
                            </div>
                            <div>
                                {r.media_type === 'movie' ? 
                                    <p className='find_textStyle'>{r.title}</p> : 
                                    <p className='find_textStyle'>{r.name}</p>}
                            </div>
                            <div>
                                {r.overview === "" ? 
                                    <p className='find_DescriptionStyle'>Sin descripción disponible</p> : 
                                    <p className='find_DescriptionStyle'>{r.overview}</p>}
                            </div>
                        </div>
                    )}
                </div>
            </ContainerMain>
        </Fragment>
    );
};