import React, { Fragment, useEffect, useState } from 'react';
import queryString from 'query-string';
import { Link, useLocation } from 'react-router-dom';
import { APIUrl, errorMsg, MyApiKey, OriginalQualityImage } from '../../helpers/Utils';
import { httpRequest } from '../../helpers/httpRequest';
import { ContainerMain } from '../../helpers/ContainerMain';
import { usePaginator } from '../../hooks/usePaginator';
import { InfoMessage } from '../../ui/InfoMessage';

export const Find = () => {
    const [response, setResponse] = useState(null);
    const [loading, setLoading] = useState(false);

    // Paginator Custom Hook
    const { CurrentPage, updatePageHandle } = usePaginator();

    const Location = useLocation();
    const { q = '' } = queryString.parse( Location.search );

    useEffect(() => {
        if( q === '') return;
        const fetchData = async () => {
            let requestUrl =`${APIUrl}search/multi?api_key=${MyApiKey}&language=es-ES&query=${q}&page=${CurrentPage}&include_adult=false`;

            setLoading(true);

            const [resp] = await Promise.all([
                httpRequest().get(requestUrl),
            ]);

            setResponse(resp);
            console.log(resp)
            setLoading(false);
        };
        
        fetchData();
    }, [q, CurrentPage])

    return (
        <Fragment>
            <ContainerMain>
                <div>
                    {loading === true && <p>Cargando...</p>}
                    {!!response && <p>Resultados de búsqueda:  `"{q}"` - resultados: {response.total_results}</p>}
                    {!!response && response.results.slice(0, 20).map((r) => 
                    <Link to={`/${r.media_type}/${r.id}`}>
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
                    </Link>
                    )}
                    {/*  Paginator System */}
                    
                    {loading === false}
                    {!!response && response.total_pages >= 1 ? <div className='pg_main'>
                        <button
                            className='pg_main_btn-default'
                            onClick={() => updatePageHandle(2, response.total_pages)}>Ant</button>
                        <p className='pg_main_Current-default'>{CurrentPage}</p>
                        <button
                            className='pg_main_btn-default'
                            onClick={() => updatePageHandle(1, response.total_pages)}>Sig</button>
                    </div> : 
                        <InfoMessage theme={errorMsg}><p>Error: No encontramos ningún resultado.</p></InfoMessage>}
                    </div>
                </ContainerMain>
                {/* <InfoMessage /> */}
            </Fragment>
            );
};