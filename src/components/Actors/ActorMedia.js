import React, { Fragment, useEffect, useState } from 'react';
import { httpRequest } from '../../helpers/httpRequest';
import { APIUrl, MyApiKey } from '../../helpers/Utils';

export const ActorMedia = ({ Actor }) => {
    const [response, setResponse] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            let requestUrl =`${APIUrl}person/${Actor.idActor}/images?api_key=${MyApiKey}&language=es-ES`;

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

    return (
        <Fragment>
            {!!response && response.profiles.slice(0, 2).map((i) => <div>
                {i.file_path}
            </div>)}
        </Fragment>
    );
};
