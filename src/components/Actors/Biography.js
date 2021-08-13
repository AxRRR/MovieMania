import React, { Fragment } from 'react';

export const Biography = ({ bioActor, nameActor }) => {
    return (
        <Fragment>
            <section>
                <p>{nameActor}</p>
                <p>{bioActor}</p>
            </section>
        </Fragment>
    );
};