import React, { Fragment, useState } from 'react';
import { LowQualityImagen, OriginalQualityImage } from '../../../helpers/Utils';
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
                    key={b.file_path}
                    src={`${OriginalQualityImage}${b.file_path}`}
                    alt={b.file_path}
                    className='bigBackdrops--Preview'
                    onClick={() => 
                        saveImageHandler(`${OriginalQualityImage}${b.file_path}`)}
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
                    key={b.file_path}
                    src={`${LowQualityImagen}${b.file_path}`}
                    alt='aaaa'
                    className='BigPosters'
                    onClick={() => saveImageHandler(`${LowQualityImagen}${b.file_path}`)}
                />
            ))}
            {showModal && <ShowMedia 
                onClose={() => setShowModal(false)} 
                    arrImages={savePathImg} />}
        </Fragment>
    );
};
