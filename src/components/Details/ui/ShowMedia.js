import React, { Fragment } from 'react';
import { Modal } from '../../../ui/Modal';

export const ShowMedia = ({ onClose, arrImages }) => {
    console.log(onClose)
    return (
        <Fragment>
            <Modal onClose={onClose}>
            {/* <p className='modal__title'>Start Sign In:</p>
            <p className='modal__body'>Start your order signin up with your Google or Facebok Account</p> */}
            {/* <div className='modal__social-container'> */}
                <img 
                    src={arrImages}
                    alt={arrImages.file_path}
                    className='BigBackdrops-Preview'
                />
            {/* </div> */}
            </Modal>
        </Fragment>
    );
};
