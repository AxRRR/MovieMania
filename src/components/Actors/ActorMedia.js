import React, { Fragment, useEffect, useState } from 'react';
import { httpRequest } from '../../helpers/httpRequest';
import { APIUrl, LowQualityImagen, MyApiKey } from '../../helpers/Utils';

export const ActorMedia = ({ Actor }) => {
    const [response, setResponse] = useState(null);
    // const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            let requestUrl =`${APIUrl}person/${Actor.idActor}/images?api_key=${MyApiKey}&language=es-ES`;

            // setLoading(true);

            const [resp] = await Promise.all([
                httpRequest().get(requestUrl),
            ]);

            setResponse(resp);
            // setLoading(false);
        };
        
        fetchData();
    }, [Actor])

    return (
        <Fragment>
            <div className='med_containerMain'> 
                {!!response && response.profiles.slice(1, 5).map((i) => 
                <div 
                    key={i.file_path}
                    className='med_containerImages'>
                    <img 
                        src={`${LowQualityImagen}${i.file_path}`}
                        alt={Actor.name}
                        className='med_image'
                        />
                </div>)}
            </div>
        </Fragment>
    );
};
