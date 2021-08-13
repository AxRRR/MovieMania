import React, { Fragment, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ContainerMain, ContainerMainNoFlex } from '../../helpers/ContainerMain';
import { httpRequest } from '../../helpers/httpRequest';
import { APIUrl, MyApiKey, OriginalQualityImage } from '../../helpers/Utils';
// import { updateTitlePage } from '../../helpers/UpdateTitle';
import { Credits } from './Credits';
import { Description } from './Description';
import { Media } from './Media';

export const ShowDetails = ({ onShowModal }) => {
    const { RouteTypeFilm, RouteIdFilm } = useParams();

    const [response, setResponse] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {

        const fetchData = async () => {
            let requestUrl =`${APIUrl}${RouteTypeFilm}/${RouteIdFilm}?api_key=${MyApiKey}&language=es-ES`;

            setLoading(true);

            const [resp] = await Promise.all([
                httpRequest().get(requestUrl),
            ]);

            setResponse(resp);
            setLoading(false);
        };

        fetchData();
    }, [RouteTypeFilm, RouteIdFilm])
    
    return (
        <Fragment>
            {/* {error && <p>La página a la que intentas acceder no existe. Error 404</p>} */}
            {loading === true && <h1>Loading</h1>}
            <ContainerMain>
                {response !== null && RouteTypeFilm === 'movie' ?
                    <div className='dt_containerMain'>
                        <div className='dt_containerImage'>
                        <img 
                            src={`${OriginalQualityImage}${response.poster_path}`}
                            alt={response.title}
                            className='dt_bigPoster'
                        />
                    </div>
                    <div className='dt_containerDetails'>
                        <p className='dt_title'>{response.title}({response.release_date.slice(0, 4)})</p>
                        <p className=''>{response.release_date}  valoración: {response.vote_average}</p>
                        <div className='dt_genres'>
                            {response.genres.map((g) => (
                                <p 
                                    key={g.name} 
                                    className='dt_genresStyle'>{g.name}</p>
                            ))}
                        </div>
                        <p className=''>{response.overview}</p>
                    </div>
                </div> 
                :
                // If not be a movie... change render to TV Series
                <div className='dt_containerMain'>
                    {response !== null && <div className='dt_containerImage'>
                        {response.poster_path !== null ? 
                        <img 
                            src={`${OriginalQualityImage}${response.poster_path}`}
                            alt={response.name}
                            className='dt_bigPoster'
                        />
                        :
                        <img 
                            src={`${OriginalQualityImage}${response.backdrop_path}`}
                            alt={response.name}
                            className='dt_bigPoster'
                        />}
                    </div>}
                {response !== null && <div className='dt_containerDetails'>
                    <p className='dt_title'>{response.name}({response.first_air_date.slice(0, 4)})</p>
                    <p className=''>{response.first_air_date}  episodios: {response.number_of_episodes}</p>
                    <div className='dt_genres'>
                        {response.genres.map((g) => (
                            <p key={g.name} className='dt_genresStyle'>{g.name}</p>
                        ))}
                    </div>
                    <p className=''>{response.overview}</p>
                </div>}
            </div>}
            </ContainerMain>
            <ContainerMainNoFlex>
                <Description 
                    arrFilm={response} 
                />
            </ContainerMainNoFlex>
            <ContainerMainNoFlex>
                <Credits />
            </ContainerMainNoFlex>
            <ContainerMainNoFlex> 
                <Media 
                    filmIdentifier={RouteIdFilm}
                    typeFilm={RouteTypeFilm}
                    onShowModal={onShowModal}
                /> 
            </ContainerMainNoFlex>    
        </Fragment>
    );
};
