import React, { Fragment, useEffect, useState } from 'react';
import { getAge } from '../../helpers/GetAge';
import { httpRequest } from '../../helpers/httpRequest';
import { APIUrl, MyApiKey, OriginalQualityImage } from '../../helpers/Utils';
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

            console.log(resp)
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
                        <p>Fecha de nacimiento:</p>
                        <p>{response.birthday}</p>
                        {!!response.deathday && <div>
                            <p>Fallecimiento:</p>
                            <p>{response.deathday}</p>
                            </div>
                        }
                        <p>Edad:</p>
                        {!!response.deathday ? 
                             <p>{getAge(response.birthday.slice(0, 4), 
                                response.deathday.slice(0, 4)) + ' años'}</p> :
                                <p>{getAge(response.birthday.slice(0, 4)) + ' años'}</p>
                                
                        }
                        <p>Sexo:</p>
                        {response.gender === 1 ? <p>Femenino</p> : <p>Masculino</p>}
                        <p>Lugar de nacimiento:</p>
                        <p>{response.place_of_birth}</p>
                    </div>
                    <Biography 
                        bioActor={response.biography}
                        nameActor={response.name}
                    />
                </div>
            }
        </Fragment>
    );
};
