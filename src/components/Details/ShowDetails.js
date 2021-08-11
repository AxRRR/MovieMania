import React, { Fragment } from 'react';
import { useParams } from 'react-router-dom';
import { ContainerMain, ContainerMainNoFlex } from '../../helpers/ContainerMain';
// import { updateTitlePage } from '../../helpers/UpdateTitle';
import { useAxios } from '../../hooks/useAxios';
import { Credits } from './Credits';
import { Description } from './Description';
import { Media } from './Media';

export const ShowDetails = ({ onShowModal }) => {
    const { RouteTypeFilm, RouteIdFilm } = useParams();
    
    const { response, isLoading } = useAxios({data: {
            methodname: 'get',
            type: RouteTypeFilm,
            genre: RouteIdFilm,
            extraArg: null,
            typeRequest: null
        }
    });
    
    return (
        <Fragment>
            {/* {error && <p>La página a la que intentas acceder no existe. Error 404</p>} */}
            {isLoading === true && <h1>Loading</h1>}
            <ContainerMain>
                {response !== null && RouteTypeFilm === 'movie' ?
                    <div className='dt-containerMain'>
                        <div className='dt-containerImage'>
                        <img 
                            src={`https://www.themoviedb.org/t/p/original/${response.poster_path}`}
                            alt={response.title}
                            className='Bigposter'
                        />
                    </div>
                    <div className='dt-containerDetails'>
                        <p className='dt-title'>{response.title}({response.release_date.slice(0, 4)})</p>
                        <p className=''>{response.release_date}  valoración: {response.vote_average}</p>
                        <div className='dt-genres'>
                            {response.genres.map((g) => (
                                <p 
                                    key={g.name} 
                                    className='dt-genresStyle'>{g.name}</p>
                            ))}
                        </div>
                        <p className=''>{response.overview}</p>
                    </div>
                </div> 
                :
                // If not be a movie... change render to TV Series
                <div className='dt-containerMain'>
                    {response !== null && <div className='dt-containerImage'>
                        {response.poster_path !== null ? 
                        <img 
                            src={`https://www.themoviedb.org/t/p/original/${response.poster_path}`}
                            alt={response.name}
                            className='Bigposter'
                        />
                        :
                        <img 
                            src={`https://www.themoviedb.org/t/p/original/${response.backdrop_path}`}
                            alt={response.name}
                            className='Bigposter'
                        />}
                    </div>}
                {response !== null && <div className='dt-containerDetails'>
                    <p className='dt-title'>{response.name}({response.first_air_date.slice(0, 4)})</p>
                    <p className=''>{response.first_air_date}  episodios: {response.number_of_episodes}</p>
                    <div className='dt-genres'>
                        {response.genres.map((g) => (
                            <p key={g.name} className='dt-genresStyle'>{g.name}</p>
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
