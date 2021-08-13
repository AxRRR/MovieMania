import React, { Fragment, useEffect, useState } from 'react';
import { httpRequest } from '../../helpers/httpRequest';
import { APIUrl, MyApiKey } from '../../helpers/Utils';
import { Backdrops, Posters } from './helpers/MediaOptions';

export const Media = ({ filmIdentifier, typeFilm, onShowModal }) => {
    const [MediaOption, setMediaOption] = useState(0)    
    const [response, setResponse] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {

        const fetchData = async () => {
            let requestUrl =`${APIUrl}${typeFilm}/${filmIdentifier}/images?api_key=${MyApiKey}`;

            setLoading(true);

            const [resp] = await Promise.all([
                httpRequest().get(requestUrl),
            ]);

            setResponse(resp);
            setLoading(false);
        };

        fetchData();
    }, [filmIdentifier, typeFilm])

    return (
        <Fragment>
            {loading}
            {response !== null &&
            <div key={response.id} className='gl_containerMedia'>
                <p className='gl_letterStyle'
                    onClick={() => setMediaOption(0)}>Imágenes de fondo: {response.backdrops.length}</p>
                <p className='gl_letterStyle'
                    onClick={() => setMediaOption(1)}>Posters: {response.posters.length}</p>
            </div>}
            {response !== null && MediaOption === 0 ? 
                <Backdrops resp={response} onShowModal={onShowModal} /> 
                : <Posters resp={response} onShowModal={onShowModal} /> }
        </Fragment>
    );
};
