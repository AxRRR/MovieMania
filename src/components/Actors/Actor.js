import React, { Fragment } from 'react';
import { useLocation } from 'react-router-dom';
import { ContainerMain } from '../../helpers/ContainerMain';
import { FormatParam } from '../../helpers/FormatParamsUrl';
import { FormatString } from '../../helpers/GetParams';
import { Appearances } from './Appearances';
import { Information } from './Information';

export const Actor = () => {
    const Location = useLocation();
    const { getParams } = FormatString(Location.pathname);

    return (
        <Fragment>
            <ContainerMain>
                <section>
                    <Information 
                        Actor={{
                            name: FormatParam(getParams[1] + ' ' + getParams[2]),
                            idActor: getParams[3]
                        }} />
                    <Appearances 
                        Actor={{
                            name: FormatParam(getParams[1] + ' ' + getParams[2]),
                            idActor: getParams[3]
                        }} />
                </section>
            </ContainerMain>
        </Fragment>
    );
};
