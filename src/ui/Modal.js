import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';

const Backdrop = (props) => {
    return <div className='modal__backdrop' onClick={props.onClose} />
};

const ModalContent = (props) => {
    return (
        <div className='modal__modal'>
            <div>{props.children}</div>
        </div>
    )
};

const portalElement = document.getElementById('overlays');

const Modal = (props) => {
    return <Fragment>
        {ReactDOM.createPortal(<Backdrop onClose={props.onClose} />, portalElement)}
        {ReactDOM.createPortal(
        <ModalContent>{props.children}</ModalContent>,
        portalElement
        )}
        <Backdrop onClose={props.onClose} />
        <ModalContent>{props.children}</ModalContent>
    </Fragment>
};

export default Modal