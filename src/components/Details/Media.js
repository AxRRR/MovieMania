import React, { Fragment } from 'react';
import { useAxios } from '../../hooks/useAxios';

export const Media = ({ filmIdentifier }) => {

    const { resp } = useAxios({
        methodname: 'get',
        type: 'movie',
        genre: filmIdentifier,
        extraArg: 'images',
        lang: 'no'
    });

    console.log(resp)

    return (
        <Fragment>
            {resp !== null &&
            <div className='gl-containerMedia'>
                <p className='gl-letterStyle'>Imágenes de fondo: {resp.backdrops.length}</p>
                <p className='gl-letterStyle'>Posters: {resp.posters.length}</p>
            </div>}
            {resp !== null && resp.backdrops.length >= 1 && resp.backdrops.slice(0, 2).map((b) => (
                <img 
                src={`https://www.themoviedb.org/t/p/original/${b.file_path}`}
                alt={b.file_path}
                className='BigBackdrops'
            />
            ))}
        </Fragment>
    );
};
