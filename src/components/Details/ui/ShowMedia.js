import React, { Fragment } from 'react';
import Modal from '../../../ui/Modal';

export const ShowMedia = (props, { arrImages }) => {
    console.log(arrImages)
    return (
        <Fragment>
            <Modal onClose={props.onCloseModal}>
            <p className='modal__title'>Start Sign In:</p>
            <p className='modal__body'>Start your order signin up with your Google or Facebok Account</p>
            {/* <div className='modal__social-container'>
                <img 
                    src={arrImages}
                    // alt={b.file_path}
                    className='BigPosters'
                />
            </div> */}
            </Modal>
        </Fragment>
    );
};
