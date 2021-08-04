import React, { Fragment } from 'react';
import { useAxios } from '../hooks/useAxios';

export const GaleryDetails = ({ filmIdentifier }) => {

    const { resp, error, isLoading } = useAxios({
        methodname: 'get',
        type: 'movie',
        genre: filmIdentifier,
        extraArg: 'images'
    });

    // console.log(resp)

    return (
        <Fragment>
            
        </Fragment>
    );
};
