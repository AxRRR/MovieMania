import React, { Fragment, useState } from 'react';
import { useAxios } from '../../hooks/useAxios';
import { Backdrops, Posters } from './helpers/MediaOptions';

export const Media = ({ filmIdentifier, typeFilm, onShowModal }) => {

    const [MediaOption, setMediaOption] = useState(0)

    const { resp } = useAxios({
        methodname: 'get',
        type: typeFilm,
        genre: filmIdentifier,
        extraArg: 'images',
        lang: 'no'
    });

    return (
        <Fragment>
            {resp !== null &&
            <div className='gl-containerMedia'>
                <p className='gl-letterStyle'
                    onClick={() => setMediaOption(0)}>Imágenes de fondo: {resp.backdrops.length}</p>
                <p className='gl-letterStyle'
                    onClick={() => setMediaOption(1)}>Posters: {resp.posters.length}</p>
            </div>}
            {resp !== null && MediaOption === 0 ? 
                <Backdrops resp={resp} onShowModal={onShowModal} /> 
                : <Posters resp={resp} onShowModal={onShowModal} /> }
        </Fragment>
    );
};
