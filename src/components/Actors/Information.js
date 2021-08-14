import React, { Fragment, useEffect, useState } from 'react';
import { getAge } from '../../helpers/GetAge';
import { httpRequest } from '../../helpers/httpRequest';
import { APIUrl, MyApiKey, OriginalQualityImage } from '../../helpers/Utils';
import { ActorMedia } from './ActorMedia';
import { Biography } from './Biography';

export const Information = ({ Actor }) => {
    const [response, setResponse] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            let requestUrl =`${APIUrl}person/${Actor.idActor}?api_key=${MyApiKey}&language=es-ES`;

            setLoading(true);

            const [resp] = await Promise.all([
                httpRequest().get(requestUrl),
            ]);

            setResponse(resp);
            setLoading(false);
        };
        
        fetchData();
    }, [Actor])

    console.log('=>>', Actor, Actor.idActor)
    return (
        <Fragment>
            {loading === true && <p>Cargando...</p>}
            {!!response && 
                <div className='inf_containerMain'>
                    <div className='inf_containerInfo'>
                        <img
                            src={`${OriginalQualityImage}${response.profile_path}`}
                            alt={Actor.name}
                            className='inf_profileImage'
                        />
                        <p className='inf_text--title'>Información Personal</p>
                        <p className='inf_text--bold'>Fecha de nacimiento:</p>
                        <p className='inf_text--normal'>{response.birthday}</p>
                        {!!response.deathday && <div>
                            <p className='inf_text--normal'>Fallecimiento:</p>
                            <p className='inf_text--normal'>{response.deathday}</p>
                            </div>
                        }
                        <p className='inf_text--bold'>Edad:</p>
                        {!!response.deathday ? 
                             <p className='inf_text--normal'>{getAge(response.birthday.slice(0, 4), 
                                response.deathday.slice(0, 4)) + ' años'}</p> :
                                <p className='inf_text--normal'>{getAge(response.birthday.slice(0, 4)) + ' años'}</p>
                                
                        }
                        <p className='inf_text--bold'>Sexo:</p>
                        {response.gender === 1 ? <p className='inf_text--normal'>Femenino</p> : <p className='inf_text--normal'>Masculino</p>}
                        <p className='inf_text--bold'>Lugar de nacimiento:</p>
                        <p className='inf_text--normal'>{response.place_of_birth}</p>
                    </div>
                    <div>
                        <Biography 
                            bioActor={response.biography}
                            nameActor={response.name}
                        />
                        <ActorMedia
                            Actor={Actor}
                        />
                    </div>
                </div>
            }
        </Fragment>
    );
};
