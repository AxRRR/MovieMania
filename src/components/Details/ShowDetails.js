import React, { Fragment } from 'react';
import { useParams } from 'react-router-dom';
import { ContainerMain, ContainerMainNoFlex } from '../../helpers/ContainerMain';
import { useFetch } from '../../hooks/useFetch';
import { Credits } from './Credits';
import { Description } from './Description';
import { Media } from './Media';

export const ShowDetails = ({ onShowModal }) => {
    const { RouteTypeFilm, RouteIdFilm } = useParams();
    
    const resp = useFetch({
        data: {
            methodname: 'get',
            type: RouteTypeFilm,
            genre: RouteIdFilm,
            extraArg: null,
            typeRequest: null
        }
    });
    console.log(resp)

    return (
        <Fragment>
            {/* {error && <p>La página a la que intentas acceder no existe. Error 404</p>} */}
            {resp.loading === true && <h1>Loading</h1>}
            <ContainerMain>
                {resp.data !== null && RouteTypeFilm === 'movie' ?
                    <div className='dt-containerMain'>
                        <div className='dt-containerImage'>
                        <img 
                            src={`https://www.themoviedb.org/t/p/original/${resp.data.poster_path}`}
                            alt={resp.data.title}
                            className='Bigposter'
                        />
                    </div>
                    <div className='dt-containerDetails'>
                        <p className='dt-title'>{resp.data.title}({resp.data.release_date.slice(0, 4)})</p>
                        <p className=''>{resp.data.release_date}  valoración: {resp.data.vote_average}</p>
                        <div className='dt-genres'>
                            {resp.data.genres.map((g) => (
                                <p 
                                    key={g.name} 
                                    className='dt-genresStyle'>{g.name}</p>
                            ))}
                        </div>
                        <p className=''>{resp.data.overview}</p>
                    </div>
                </div> 
                :
                // If not be a movie... change render to TV Series
                <div className='dt-containerMain'>
                    {resp.data !== null && <div className='dt-containerImage'>
                        {resp.data.poster_path !== null ? 
                        <img 
                            src={`https://www.themoviedb.org/t/p/original/${resp.data.poster_path}`}
                            alt={resp.data.name}
                            className='Bigposter'
                        />
                        :
                        <img 
                            src={`https://www.themoviedb.org/t/p/original/${resp.data.backdrop_path}`}
                            alt={resp.data.name}
                            className='Bigposter'
                        />}
                    </div>}
                {resp.data !== null && <div className='dt-containerDetails'>
                    <p className='dt-title'>{resp.data.name}({resp.data.first_air_date.slice(0, 4)})</p>
                    <p className=''>{resp.data.first_air_date}  episodios: {resp.data.number_of_episodes}</p>
                    <div className='dt-genres'>
                        {resp.data.genres.map((g) => (
                            <p key={g.name} className='dt-genresStyle'>{g.name}</p>
                        ))}
                    </div>
                    <p className=''>{resp.data.overview}</p>
                </div>}
            </div>}
            </ContainerMain>
            <ContainerMainNoFlex>
                <Description 
                    arrFilm={resp.data} 
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
