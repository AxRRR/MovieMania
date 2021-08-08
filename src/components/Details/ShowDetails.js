import React, { Fragment } from 'react';
import { useParams } from 'react-router-dom';
import { ContainerMain, ContainerMainNoFlex } from '../../helpers/ContainerMain';
import { useAxios } from '../../hooks/useAxios';
import { Credits } from './Credits';
import { Description } from './Description';
import { Media } from './Media';

export const ShowDetails = ({ onShowModal }) => {
    const { RouteTypeFilm, RouteIdFilm } = useParams();
    
    const { resp, isLoading } = useAxios({
        methodname: 'get',
        type: RouteTypeFilm,
        genre: RouteIdFilm,
        extraArg: null,
        typeRequest: null
    });
    // console.log(resp)

    return (
        <Fragment>
            {/* {error && <p>La página a la que intentas acceder no existe. Error 404</p>} */}
            {isLoading === true && <h1>Loading</h1>}
            <ContainerMain>
                {resp !== null && RouteTypeFilm === 'movie' ?
                    <div className='dt-containerMain'>
                        <div className='dt-containerImage'>
                        <img 
                            src={`https://www.themoviedb.org/t/p/original/${resp.poster_path}`}
                            alt={resp.title}
                            className='Bigposter'
                        />
                    </div>
                    <div className='dt-containerDetails'>
                        <p className='dt-title'>{resp.title}({resp.release_date.slice(0, 4)})</p>
                        <p className=''>{resp.release_date}  valoración: {resp.vote_average}</p>
                        <div className='dt-genres'>
                            {resp.genres.map((g) => (
                                <p className='dt-genresStyle'>{g.name}</p>
                            ))}
                        </div>
                        <p className=''>{resp.overview}</p>
                    </div>
                </div> 
                :
                // If not be a movie... change render to TV Series
                <div className='dt-containerMain'>
                    {resp !== null && <div className='dt-containerImage'>
                        {resp.poster_path !== null ? 
                        <img 
                            src={`https://www.themoviedb.org/t/p/original/${resp.poster_path}`}
                            alt={resp.name}
                            className='Bigposter'
                        />
                        :
                        <img 
                            src={`https://www.themoviedb.org/t/p/original/${resp.backdrop_path}`}
                            alt={resp.name}
                            className='Bigposter'
                        />}
                    </div>}
                {resp !== null && <div className='dt-containerDetails'>
                    <p className='dt-title'>{resp.name}({resp.first_air_date.slice(0, 4)})</p>
                    <p className=''>{resp.first_air_date}  episodios: {resp.number_of_episodes}</p>
                    <div className='dt-genres'>
                        {resp.genres.map((g) => (
                            <p className='dt-genresStyle'>{g.name}</p>
                        ))}
                    </div>
                    <p className=''>{resp.overview}</p>
                </div>}
            </div>}
            </ContainerMain>
            <ContainerMainNoFlex>
                <Description 
                    arrFilm={resp} 
                />
            </ContainerMainNoFlex>
            <ContainerMainNoFlex>
                {/* <Credits 
                    filmIdentificier={RouteIdFilm}
                    typeFilm={RouteTypeFilm}
                />  */}
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
