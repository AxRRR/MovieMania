import React, { Fragment } from 'react';

export const ContainerMain = props => {
    return (
        <Fragment>
            <section className='containerMain'>{props.children}</section>
        </Fragment>
    );
};
