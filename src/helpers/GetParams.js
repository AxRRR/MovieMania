import { useEffect } from 'react';
import PropTypes from 'prop-types';

export function GetParams( { currentLocation } ){
    let getParams = '';

    // useMemo(() => FormatString(currentLocation), 
    // [currentLocation])

    useEffect(() => {
        getParams = FormatString(currentLocation)
    }, [currentLocation])
    
    
    return { getParams }
};

function FormatString(currentLocation){
    
    currentLocation.pathname.toLowerCase().split(/\W/g).filter(word => word.length > 1)
    // return variableee;
}
GetParams.propTypes = {
    currentLocation: PropTypes.string.isRequired
};
