import PropTypes from 'prop-types';

export function FormatString(getCurrentLocation){
    let getParams = getCurrentLocation.toLowerCase().split(/\W/g).filter(word => word.length > 1)
    return { getParams };
}

FormatString.propTypes = {
    getCurrentLocation: PropTypes.string.isRequired
};
