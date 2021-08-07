import React, { Fragment, useState } from 'react';
import { ShowMedia } from '../ui/ShowMedia';

// Backdrops Structure 
export const Backdrops = ({ resp }) => {
    const [showModal, setShowModal] = useState(false);
    const [savePathImg, setSavePathImg] = useState('');

    const saveImageHandler = ( image ) => {
        setSavePathImg(image);
        setShowModal(true);
    }

    return (
        <Fragment>
            {!!resp && 
                resp.backdrops.length >= 1 && 
                    resp.backdrops.slice(0, 2).map((b) => (
                <img 
                    src={`https://www.themoviedb.org/t/p/original/${b.file_path}`}
                    alt={b.file_path}
                    className='BigBackdrops'
                    onClick={() => 
                        saveImageHandler(`https://www.themoviedb.org/t/p/original/${b.file_path}`)}
                />
            ))}
            {showModal && <ShowMedia 
                onClose={() => setShowModal(false)} 
                    arrImages={savePathImg} />}
        </Fragment>
    );
};

// Poster Structure 
export const Posters = ({ resp }) => {
    const [showModal, setShowModal] = useState(false);
    const [savePathImg, setSavePathImg] = useState('');

    const saveImageHandler = ( image ) => {
        setSavePathImg(image);
        setShowModal(true);
    }

    return (
        <Fragment>
            {!!resp && 
                resp.posters.length >= 1 && 
                    resp.posters.slice(0, 8).map((b) => (
                <img 
                    src={`https://www.themoviedb.org/t/p/w220_and_h330_face/${b.file_path}`}
                    alt='aaaa'
                    className='BigPosters'
                    onClick={() => saveImageHandler(`https://www.themoviedb.org/t/p/w220_and_h330_face/${b.file_path}`)}
                />
            ))}
            {showModal && <ShowMedia 
                onClose={() => setShowModal(false)} 
                    arrImages={savePathImg} />}
        </Fragment>
    );
};
