import React, { Fragment } from 'react';
import { useParams } from 'react-router-dom';
import { ContainerMain, ContainerMainNoFlex } from '../../helpers/ContainerMain';
import { useAxios } from '../../hooks/useAxios';
import { Credits } from './Credits';
import { Description } from './Description';
import { Media } from './Media';

export const ShowDetails = () => {
    const { RouteIdFilm } = useParams();

    const { resp, error, isLoading } = useAxios({
        methodname: 'get',
        type: 'movie',
        genre: RouteIdFilm,
        extraArg: null
    });

    console.log(resp)
    console.log(error)

    return (
        <Fragment>
            {/* {error && <p>La página a la que intentas acceder no existe. Error 404</p>} */}
            {isLoading === true && <h1>Loading</h1>}
            <ContainerMain>
                {resp !== null && 
                    <div className='dt-containerMain'>
                        <div className='dt-containerImage'>
                        <img 
                            src={`https://www.themoviedb.org/t/p/original/${resp.poster_path}`}
                            alt={resp.title}
                            className='Bigposter'
                        />
                    </div>
                    <div className='dt-containerDetails'>
                        <p className='dt-title'>{resp.title}</p>
                        <p className=''>{resp.release_date}  valoración: {resp.vote_average}</p>
                        <div className='dt-genres'>
                            {resp.genres.map((g) => (
                                <p className='dt-genresStyle'>{g.name}</p>
                            ))}
                        </div>
                        <p className=''>{resp.overview}</p>
                    </div>
                </div>}
                </ContainerMain>
            <ContainerMainNoFlex> <Description arrFilm={resp} /> </ContainerMainNoFlex>
            <ContainerMainNoFlex> <Credits filmIdentificier={RouteIdFilm} /> </ContainerMainNoFlex>
            <ContainerMainNoFlex> <Media filmIdentifier={RouteIdFilm} /> </ContainerMainNoFlex>    
        </Fragment>
    );
};
