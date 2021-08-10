import { useEffect, useMemo } from 'react';
import PropTypes from 'prop-types';

export function GetParams({ currentLocation }){
    let getParams = '';

    useMemo(() => FormatString(currentLocation), 
    [currentLocation])

    // useEffect(() => {
    //     getParams = FormatString(currentLocation)
    // }, [currentLocation])
    
    
    console.log(getParams)
    return { getParams }
};

export function FormatString(getCurrentLocation){
    return getCurrentLocation.toLowerCase().split(/\W/g).filter(word => word.length > 1)
}

GetParams.propTypes = {
    currentLocation: PropTypes.string.isRequired
};
