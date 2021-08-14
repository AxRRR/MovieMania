import React, { Fragment } from 'react';

export const Biography = ({ bioActor, nameActor }) => {
    return (
        <Fragment>
            <section>
                <div className='bio_containerMain'>
                    <p className='bio_text--title'>{nameActor}</p>
                    <p className=''>{bioActor}</p>
                </div>
            </section>
        </Fragment>
    );
};