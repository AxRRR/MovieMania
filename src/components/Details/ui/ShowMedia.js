import React, { Fragment } from 'react';
import { Modal, ModalSmall } from '../../../ui/Modal';

export const ShowMedia = ({ onClose, arrImages, type }) => {
    return (
        <Fragment>
            {type !== 'poster' ? 
            <Modal onClose={onClose}>
                <img 
                    src={arrImages}
                    alt={arrImages.file_path}
                    className='bigBackdrops--Preview'
                />
            </Modal>
            : 
            <ModalSmall onClose={onClose}>
                <img 
                    src={arrImages}
                    alt={arrImages.file_path}
                    className='bigPosters--Preview'
                />
            </ModalSmall>}
        </Fragment>
    );
};
