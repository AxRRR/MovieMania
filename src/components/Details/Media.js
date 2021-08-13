import React, { Fragment, useState } from 'react';
import { useAxios } from '../../hooks/useAxios';
import { Backdrops, Posters } from './helpers/MediaOptions';

export const Media = ({ filmIdentifier, typeFilm, onShowModal }) => {

    const [MediaOption, setMediaOption] = useState(0)

    const { response } = useAxios({data: {
            methodname: 'get',
            type: typeFilm,
            genre: filmIdentifier,
            extraArg: 'images',
            lang: 'no'
        }
    });
    
    return (
        <Fragment>
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
