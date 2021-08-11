// import { useMemo, useState } from 'react';
// import PropTypes from 'prop-types';

// export function GetParams({ currentLocation }){
//     const [state, setstate] = useState('');

//     useMemo(() => setstate(FormatString(currentLocation)), 
//     [currentLocation])
    
//     console.log(state)
//     return { state }
// };

export function FormatString(getCurrentLocation){
    // console.log(getCurrentLocation.toLowerCase().split(/\W/g).filter(word => word.length > 1))
    // let getParams = '';
    let getParams = getCurrentLocation.toLowerCase().split(/\W/g).filter(word => word.length > 1)
    return {getParams};
}

// GetParams.propTypes = {
//     currentLocation: PropTypes.string.isRequired
// };
