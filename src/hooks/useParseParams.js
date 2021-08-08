import { useMemo } from 'react';
import PropTypes from 'prop-types';

export function ParseParams( { currentLocation } ){
    let variableee = '';

    useMemo(() => FormatString(), 
    [currentLocation, FormatString])
    
    function FormatString(){
        variableee = 
        currentLocation.pathname.toLowerCase().split(/\W/g).filter(word => word.length > 1)
    }
    // console.log('variableee')
    // console.log(variableee)


    return { variableee }
};

ParseParams.propTypes = {
    currentLocation: PropTypes.string.isRequired
};


// PublicRoute.propTypes = {
//     isAuthenticated: PropTypes.bool.isRequired,
//     component: PropTypes.func.isRequired