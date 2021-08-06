import React, { Fragment } from 'react';
import Modal from '../../../ui/Modal';
// import { ShowMedia } from '../ui/ShowMedia';

export const Backdrops = ({ resp, onShowModal}) => {
    return (
        <Fragment>
            {resp !== null && resp.backdrops.length >= 1 && resp.backdrops.slice(0, 2).map((b) => (
                <img 
                src={`https://www.themoviedb.org/t/p/original/${b.file_path}`}
                alt={b.file_path}
                className='BigBackdrops'
                onClick={onShowModal}
            />
            ))}
        </Fragment>
    );
};

// Pendiente no finalizado

export const Posters = ({ resp, onShowModal }) => {
    const ShowMedia2 = ( arrImages ) => {
        console.log(arrImages)
        return (
            <Fragment>
            <Modal>
            <p className='modal__title'>Start Sign In:</p>
            <p className='modal__body'>Start your order signin up with your Google or Facebok Account</p>
            <div className='modal__social-container'>
                <img 
                    src={arrImages}
                    alt='aaaa'
                    className='BigPosters'
                    />
            </div>
            
            </Modal>
        </Fragment>
        );
    }

    return (
        <Fragment>
            {resp !== null && 
                resp.posters.length >= 1 && 
                    resp.posters.slice(0, 8).map((b) => (
                <img 
                    src={`https://www.themoviedb.org/t/p/w220_and_h330_face/${b.file_path}`}
                    alt='aaaa'
                    className='BigPosters'
                    onClick={() => ShowMedia2(`https://www.themoviedb.org/t/p/w220_and_h330_face/${b.file_path}`)}
                />
            ))}
        </Fragment>
    );
};

export const ShowMedia44 = ( arrImages, onShowModal ) => {
    console.log(arrImages)
    return (
        <Fragment>
            <Modal>
            <p className='modal__title'>Start Sign In:</p>
            <p className='modal__body'>Start your order signin up with your Google or Facebok Account</p>
            <div className='modal__social-container'>
                <img 
                    src={arrImages}
                    alt='aaaa'
                    className='BigPosters'
                />
            </div>
            {onShowModal()}
            </Modal>
        </Fragment>
    );
};
